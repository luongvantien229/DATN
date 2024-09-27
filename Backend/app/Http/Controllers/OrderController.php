<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    //
    public function index()
    {
        $orders = Order::with('user')
            ->paginate(20);
        if ($orders) {
            foreach ($orders as $order) {
                foreach ($order->items as $order_items) {
                    $product = Product::where('id', $order_items->product_id)->pluck('name');
                    $order_items->products_name = $product['0'];
                }
            }
            return response()->json($orders, 200);
        } else
            return response()->json('there is no orders');

    }

    public function show($id)
    {
        $order = Order::find($id);
        return response()->json($order, 200);
    }

    public function store(Request $request)
    {
        try {
            // $location = Locations::where('user_id', Auth::id())->first();

            $request->validate([
                'order_items' => 'required',
                'total_price' => 'required',
                'quantity' => 'required',
                'payment_method' => 'required',
                'date_deliver' => 'required'
            ]);

            $order = new Order();
            $order->user_id = Auth::id();
            // $order->location_id = $location->id;
            $order->payment_method = $request->payment_method;
            $order->total_price = $request->total_price;
            $order->data_deliver = $request->data_deliver;
            $order->save();
            foreach ($request->order_items as $order_items) {
                $items = new OrderItem();
                $items->order_id = $order->id;
                $items->price = $order_items['price'];
                $items->product_id = $order_items['product_id'];
                $items->quantity = $order_items['quantity'];
                $items->save();
                $product = Product::where('id', $order_items['product_id'])->first();
                $product->qty = $order_items['quantity'];
                $product->save();
            }
            return response()->json('order is added', 201);
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function get_order_items($id)
    {
        $order_items = OrderItem::where('order_id', $id)->get();
        if ($order_items) {
            foreach ($order_items as $order_item) {
                $product = Product::where('id', $order_item->product_id)->pluck('name');
                $order_item->products_name = $product['0'];
            }
            return response()->json($order_items, 200);
        } else
            return response()->json('no items found');
    }

    public function get_user_orders($id)
    {
        $orders = Order::where('user_id', $id)
        ->with('items', function ($query) {
            $query->orderBy('created_at', 'desc');
        })->get();

        if ($orders) {
            foreach ($orders as $order) {
                foreach($order->items as $order_items) {
                    $product = Product::where('id', $order_items->product_id)->pluck('name');
                $order_items->product_name = $product['0'];
                }
            }
            return response()->json($order, 200);
        }else
        return response()->json('no orders found for this user');

    }

    public function change_order_status($id,Request $request){
        $order= Order::find($id);
        if($order){
            $order->update(['status' =>$request->status]);
            return response()->json('Status change successfully');
        } else return response()->json('Order was not found');
    }
    public function placeOrder(Request $request)
    {
        $user = Auth::user();
        $totalPrice = 0;
        $couponDiscount = 0;

        // Validate request
        $validatedData = $request->validate([
            'products' => 'required|array', // Danh sách ID sản phẩm với số lượng
            'payment_method' => 'required|string',
            'coupon_code' => 'nullable|string',
        ]);

        // Kiểm tra xem phiếu giảm giá có hợp lệ không
        if ($request->has('coupon_code') && !empty($request->code)) {
            $coupon = Coupon::where('code', $request->code)->first();
            if (!$coupon) {
                return response()->json(['message' => 'Invalid coupon code'], 400);
            }

            if ($coupon->time <= 0) {
                return response()->json(['message' => 'Coupon has been used up'], 400);
            }
        }

        // Tính tổng giá sản phẩm
        foreach ($request->products as $product_id => $qty) {
            $product = Product::find($product_id);
            if (!$product || $product->qty < $qty) {
                return response()->json(['message' => 'Invalid product or insufficient stock'], 400);
            }
            $totalPrice += $product->price * $qty;
        }

        // Áp dụng giảm giá phiếu giảm giá
        if (isset($coupon)) {
            if ($coupon->condition === 'percentage') {  // percentage nghĩa là tỷ lệ phần trăm (%)
                $couponDiscount = ($totalPrice * $coupon->number) / 100;
            } elseif ($coupon->condition === 'fixed') {
                $couponDiscount = $coupon->number;
            }

            $totalPrice -= $couponDiscount;
            $coupon->time -= 1; // Giảm số lượng sử dụng phiếu giảm giá
            $coupon->save();
        }

        // Tạo đơn hàng
        $order = Order::create([
            'user_id' => $user->id,
            'total_price' => $totalPrice,
            'payment_method' => $request->payment_method,
            'date_deliver' => now()->addDays(7), // Ví dụ: Giao hàng trong 7 ngày
            'status' => 'pending',
        ]);

        // Giảm lượng sản phẩm tồn kho
        foreach ($request->products as $product_id => $qty) {
            $product = Product::find($product_id);
            $product->qty -= $qty;
            $product->save();

            $order->orderItems()->create([
                'product_id' => $product_id,
                'quantity' => $qty,
                'price' => $product->price,
            ]);
        }

        // cập nhật điểm
        $user->points += floor($totalPrice / 1000); // Tiêu 1000 được 1 điểm
        $user->save();

        return response()->json(['message' => 'Order placed successfully', 'order' => $order]);
    }
}
