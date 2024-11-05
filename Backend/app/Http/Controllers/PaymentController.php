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
        $coupon = $request->input('coupon', []);
        if (empty($cartItems)) {
            return response()->json(['message' => 'Cart is empty!'], 400);
        }

        $total = 0;
        foreach ($cartItems as $item) {
            $total += $item['price'] * $item['quantity'];
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
                            'name' => $item['name'], // assuming name is in $cartItems
                            // 'description' => $item['description'] ?? '', // optional description
                        ],
                    ],
                    'quantity' => $item['quantity'],
                ];
            }

            //create the coupon in the database
            $coupon = Coupon::where('code')->first();
            $coupon->used = $coupon->used . ',' . Auth::id();
            $coupon->time = $coupon->time - 1;
            $coupon->save();

            // Create the order in the database
            $order = new Order();
            $order->user_id = Auth::id();
            $order->total_price = $total;
            $order->date_deliver = now();
            $order->order_code = 'ORD-' . time() . '-' . rand(1000, 9999);
            $order->payment_method = 'Chuyển khoản';
            $order->status = 'Pending';
            $order->save();

            // Save order items
            foreach ($cartItems as $item) {
                $product = Product::find($item['id']);
                if (!$product || $product->qty < $item['quantity']) {
                    return response()->json(['message' => 'Product stock is insufficient!'], 400);
                }
                $orderItem = new OrderItem();
                $orderItem->order_id = $order->id;
                $orderItem->product_id = $item['id'];
                $orderItem->price = $item['price'];
                $orderItem->quantity = $item['quantity'];
                $orderItem->save();

                // Reduce product stock
                $product->qty -= $item['quantity'];
                $product->save();
            }

            // Clear the cart (if stored in session or user)
            session()->forget('cart');

            // Set Stripe API key
            Stripe::setApiKey(env('STRIPE_KEY'));

            // Create a Stripe checkout session
            $checkout_session = Session::create([
                'payment_method_types' => ['card'],
                'line_items' => $lineItems,
                'mode' => 'payment',
                'success_url' => $request->success_url,
                'cancel_url' => $request->input('cancel_url', url('/cancel')), // Optional cancel URL
            ]);

            // Phát sự kiện đơn hàng hoàn thành (realtime cho admin)
            broadcast(new OrderCompletedEvent($order))->toOthers();

            // Gửi email hóa đơn sau khi đặt hàng
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
