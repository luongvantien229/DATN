<?php

namespace App\Http\Controllers;

// use ErrorException;
// use Stripe\Checkout\Session;
// use Stripe\Stripe;
// use Stripe\Charge;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
// use App\Models\Order;
// use App\Models\OrderItem;
// use Stripe\Exception\CardException;
use App\Http\Controllers\Controller;
use ErrorException;
use Illuminate\Http\Request;
use Stripe\Checkout\Session;
use Stripe\Stripe;

// class PaymentController extends Controller
// {
//     // public function pay(Request $request)
//     // {
//     //     $cart = session()->get('cart', []);

//     //     if (!$cart) {
//     //         return response()->json(['message' => 'Cart is empty!'], 400);
//     //     }

//     //     $total = 0;
//     //     foreach ($cart as $item) {
//     //         $total += $item['price'] * $item['quantity'];
//     //     }

//     //     // Validate the payment request
//     //     $request->validate([
//     //         'stripeToken' => 'required'
//     //     ]);

//     //     // Set Stripe API key
//     //     Stripe::setApiKey(env('STRIPE_KEY'));

//     //     // Create charge on Stripe
//     //     try {
//     //         $charge = Charge::create([
//     //             'amount' => $total * 1000,
//     //             'currency' => 'VND',
//     //             'source' => $request->stripeToken,
//     //             'description' => 'Order Payment',
//     //             'success_url' =>$request->success_url
//     //         ]);

//     //         // Create the order in the database
//     //         $order = new Order();
//     //         $order->user_id = Auth::id();
//     //         $order->total_price = $total;
//     //         $order->date_deliver = now();
//     //         $order->payment_method = 'COD';
//     //         $order->status = 'Pending';  // Initial status
//     //         $order->save();

//     //         // Save order items
//     //         foreach ($cart as $productId => $item) {
//     //             $orderItem = new OrderItem();
//     //             $orderItem->order_id = $order->id;
//     //             $orderItem->product_id = $productId;
//     //             $orderItem->price = $item['price'];
//     //             $orderItem->quantity = $item['quantity'];
//     //             $orderItem->save();
//     //         }

//     //         // Clear the cart
//     //         session()->forget('cart');

//     //         return response()->json(['message' => 'Payment successful and order created!', 'order' => $order], 201);
//     //     } catch (\Exception $e) {
//     //         return response()->json(['message' => 'Payment failed! ' . $e->getMessage()], 500);
//     //     }
//     // }

//     public function pay(Request $request)
//     {
//         $cartItems = $request->input('cartItems', []);

//         if (empty($cartItems)) {
//             return response()->json(['message' => 'Cart is empty!'], 400);
//         }

//         $total = 0;
//         foreach ($cartItems as $item) {
//             $total += $item['price'] * $item['quantity'];
//         }

//         // Validate the payment request
//         $request->validate([
//             'stripeToken' => 'required',
//             'success_url' => 'required'
//         ]);

//         // Set Stripe API key
//         Stripe::setApiKey(env('STRIPE_KEY'));

//         try {
//             // Create charge on Stripe
//             $charge = Charge::create([
//                 'amount' => $total * 100, // Amount in cents, use correct multiplier
//                 'currency' => 'vnd',
//                 'source' => $request->stripeToken,
//                 'description' => 'Order Payment',
//             ]);

//             // Create the order in the database
//             $order = new Order();
//             $order->user_id = Auth::id();
//             $order->total_price = $total;
//             $order->date_deliver = now();
//             $order->payment_method = 'Stripe'; // Specify that payment was done through Stripe
//             $order->status = 'Pending'; // Initial status
//             $order->save();

//             // Save order items
//             foreach ($cartItems as $item) {
//                 $orderItem = new OrderItem();
//                 $orderItem->order_id = $order->id;
//                 $orderItem->product_id = $item['product_id'];
//                 $orderItem->price = $item['price'];
//                 $orderItem->quantity = $item['quantity'];
//                 $orderItem->save();
//             }

//             // Clear the cart (if stored in session or user)
//             session()->forget('cart');

//             return response()->json(['message' => 'Payment successful and order created!', 'order' => $order], 201);
//         } catch (CardException $e) {
//             // Catch any Stripe-specific errors
//             return response()->json(['message' => 'Payment failed! ' . $e->getMessage()], 500);
//         } catch (\Exception $e) {
//             // General error handling
//             return response()->json(['message' => 'An error occurred! ' . $e->getMessage()], 500);
//         }
//     }


// }

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
                'line_items' => [[
                    'price_data' => [
                        'currency' => 'usd',
                        'product_data' => [
                            'name' => 'React Shop Orders'
                        ],
                        'unit_amount' => $this->calculateOrderTotal($request->cartItems),
                    ],
                    'quantity' => 1
                ]],
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
}
