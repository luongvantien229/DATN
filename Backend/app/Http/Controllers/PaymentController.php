<?php

namespace App\Http\Controllers;

// use ErrorException;
// use Stripe\Checkout\Session;
// use Stripe\Stripe;
// use Stripe\Charge;
// use Illuminate\Http\Request;
use App\Events\OrderCompletedEvent;
use App\Mail\OrderInvoiceMail;
use App\Models\Coupon;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Support\Facades\Mail;
use Stripe\Exception\CardException;
use App\Http\Controllers\Controller;
use ErrorException;
use Illuminate\Http\Request;
use Stripe\Checkout\Session;
use Stripe\Stripe;

class PaymentController extends Controller
{
    //
    public function payByStripe(Request $request)
    {
        //provide the stripe key
        Stripe::setApiKey(env('STRIPE_KEY'));

        try {
            $checkout_session = Session::create([
                'payment_method_types' => ['card'],
                'line_items' => [
                    [
                        'price_data' => [
                            'currency' => 'usd',
                            'product_data' => [
                                'name' => 'React Shop Orders'
                            ],
                            'unit_amount' => $this->calculateOrderTotal($request->cartItems),
                        ],
                        'quantity' => 1
                    ]
                ],
                'mode' => 'payment',
                'success_url' => $request->success_url
            ]);
            return response()->json([
                'url' => $checkout_session->url
            ]);
        } catch (ErrorException $e) {
            return response()->json([
                'error' => $e->getMessage()
            ]);
        }
    }

    public function calculateOrderTotal($items)
    {
        $total = 0;
        foreach ($items as $item) {
            $total += $item['price'] * $item['qty'];
        }
        return $total * 100;
    }

    public function pay(Request $request)
    {
        $cartItems = $request->input('cartItems', []);
        $coupon = $request->input('coupon'); // Có thể null
        $PaymentInformation = $request->input('PaymentInformation');
        if (empty($cartItems)) {
            return response()->json(['message' => 'Cart is empty!'], 400);
        }

        // Validate the payment request
        $request->validate([
            'success_url' => 'required'
        ]);

        try {
            $lineItems = [];
            foreach ($cartItems as $item) {
                $lineItems[] = [
                    'price_data' => [
                        'currency' => 'USD',
                        'unit_amount' => $item['price'] * 100,
                        'product_data' => [
                            'name' => $item['name'],
                        ],
                    ],
                    'quantity' => $item['quantity'],
                ];
            }

            // Xử lý coupon nếu tồn tại
            $cou = null;
            if (!empty($coupon) && isset($coupon['code'])) {
                $cou = Coupon::where('code', $coupon['code'])->first();
                if ($cou) {
                    $cou->used .= $coupon['used'] . ',' . auth()->id();
                    $cou->time -= 1;
                    $cou->save();
                }
            }

            $sub_total = 0;
            foreach ($cartItems as $item) {
                $sub_total += $item['price'] * $item['quantity'];
            }
            $discount = 0;
            if (!empty($coupon) && $cou) {
                if (isset($coupon['condition']) && $coupon['condition'] === 1) {
                    $discount = ($sub_total * $coupon['number']) / 100;
                } elseif (isset($coupon['condition']) && $coupon['condition'] === 2) {
                    $discount = $coupon['number'];
                }
            }

            $feeShip = 50000;

            $total = ($sub_total - $discount + $feeShip);

            date_default_timezone_set('Asia/Ho_Chi_Minh');
            $today = Carbon::now('Asia/Ho_Chi_Minh')->format('Y-m-d');

            $order = new Order();
            $order->user_id = auth()->id();
            $order->total_price = $total;
            $order->date_deliver = $today;
            $order->order_code = 'ORD-' . time() . '-' . rand(1000, 9999);
            $order->payment_method = $PaymentInformation['paymentMethod']; // Thanh toán bằng tiền mặt
            $order->status = 'Pending'; // Initial status
            $order->shipname = $PaymentInformation['shipName']; //
            $order->shipphone = $PaymentInformation['shipPhone'];
            $order->address = $PaymentInformation['address'];
            $order->note = $PaymentInformation['note'];
            $order->save();

            foreach ($cartItems as $item) {
                $product = Product::find($item['id']);
                if (!$product || $product->qty < $item['quantity']) {
                    return response()->json(['message' => 'Product stock is insufficient!'], 400);
                }
                $orderItem = new OrderItem();
                $orderItem->order_id = $order->id;
                $orderItem->product_id = $item['id'];
                $orderItem->order_code = $order->order_code;
                $orderItem->coupon_code = $coupon['code'] ?? "no"; // Có thể null
                $orderItem->price = $item['price'];
                $orderItem->quantity = $item['quantity'];
                $orderItem->save();
            }

            session()->forget('cart');

            Stripe::setApiKey(env('STRIPE_KEY'));

            $checkout_session = Session::create([
                'payment_method_types' => ['card'],
                'line_items' => $lineItems,
                'mode' => 'payment',
                'success_url' => $request->success_url,
                'cancel_url' => $request->input('cancel_url', url('/cancel')),
            ]);

            $user = Auth::user();
            $user->points += floor($total / 1000); // Tiêu 1000 được 1 điểm
            $user->save();
            broadcast(new OrderCompletedEvent($order))->toOthers();

            Mail::to(auth()->user()->email)->send(new OrderInvoiceMail($order));

            return response()->json([
                'message' => 'Payment successful and order created!',
                'order' => $order,
                'url' => $checkout_session->url
            ], 201);
        } catch (CardException $e) {
            return response()->json(['message' => 'Payment failed! ' . $e->getMessage()], 500);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred! ' . $e->getMessage()], 500);
        }
    }
}
