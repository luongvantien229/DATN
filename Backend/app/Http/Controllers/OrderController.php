<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\OrderCompletedEvent;
use App\Mail\OrderInvoiceMail;
use Illuminate\Support\Facades\Mail;
use PDF;

class OrderController extends Controller
{

    public function print_order($checkout_code){
		$pdf = \App::make('dompdf.wrapper');
		$pdf->loadHTML($this->print_order_convert($checkout_code));

		return $pdf->stream();
	}


public function print_order_convert($checkout_code)
{
    $order = Order::with('user', 'items.product')->where('order_code', $checkout_code)->first();

    if (!$order) {
        return "Order not found.";
    }

    $user = $order->user;
    $order_items = $order->items;

    $coupon = null;
    $coupon_echo = '0';


    foreach ($order_items as $order_item) {
        $product_coupon = $order_item->product->coupon_code ?? 'no';

        if ($product_coupon != 'no') {
            $coupon = Coupon::where('code', $product_coupon)->first();
            if ($coupon) {
                $coupon_condition = $coupon->condition;
                $coupon_number = $coupon->number;

                if ($coupon_condition == 1) {
                    $coupon_echo = $coupon_number . '%';
                } elseif ($coupon_condition == 2) {
                    $coupon_echo = number_format($coupon_number, 0, ',', '.') . 'đ';
                }
            }
        }
    }

    if (!$coupon) {
        $coupon_condition = 2;
        $coupon_number = 0;
        $coupon_echo = '0';
    }

    $output = '';

    $output .= '<style>body{
        font-family: DejaVu Sans;
    }
    .table-styling{
        border:1px solid #000;
    }
    .table-styling tbody tr td{
        border:1px solid #000;
    }
    </style>
    <h1><center>Công ty TNHH một thành viên ABCD</center></h1>
    <h4><center>Độc lập - Tự do - Hạnh phúc</center></h4>
    <p>Người đặt hàng</p>
    <table class="table-styling">
        <thead>
            <tr>
                <th>Tên khách đặt</th>
                <th>Số điện thoại</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>';

    $output .= '
            <tr>
                <td>' . $user->name . '</td>
                <td>' . $user->phone . '</td>
                <td>' . $user->email . '</td>
            </tr>';

    $output .= '
        </tbody>
    </table>';

    $output .= '
    <p>Đơn hàng đặt</p>
    <table class="table-styling">
        <thead>
            <tr>
                <th>Tên sản phẩm</th>
                <th>Phí ship</th>
                <th>Số lượng</th>
                <th>Giá sản phẩm</th>
                <th>Thành tiền</th>
            </tr>
        </thead>
        <tbody>';

    $total = 0;

    foreach ($order_items as $item) {
        $subtotal = $item->price * $item->quantity;
        $total += $subtotal;

        $product_coupon = $item->product->coupon_code ?? 'không mã';


        $output .= '
            <tr>
                <td>' . $item->product->name . '</td>
                <td>' . $product_coupon . '</td>

                <td>' . $item->quantity . '</td>
                <td>' . number_format($item->price, 0, ',', '.') . 'đ</td>
                <td>' . number_format($subtotal, 0, ',', '.') . 'đ</td>
            </tr>';
    }

    if ($coupon_condition == 1) {
        $total_after_coupon = ($total * $coupon_number) / 100;
        $total_coupon = $total - $total_after_coupon;
    } else {
        $total_coupon = $total - $coupon_number;
    }

    $output .= '
        <tr>
            <td colspan="2">
                <p>Tổng giảm: ' . $coupon_echo . '</p>

                <p>Thanh toán : ' . number_format($total_coupon , 0, ',', '.') . 'đ</p>
            </td>
        </tr>';

    $output .= '
        </tbody>
    </table>';

    $output .= '
    <p>Ký tên</p>
    <table>
        <thead>
            <tr>
                <th width="200px">Người lập phiếu</th>
                <th width="800px">Người nhận</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>';

    return $output;
}

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
            $order->data_deliver = now()->addDays(7);
            $order->status ='pending';
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

        // if ($orders) {
        //     foreach ($orders as $order) {
        //         foreach($order->items as $order_items) {
        //             $product = Product::where('id', $order_items->product_id)->pluck('name');
        //         $order_items->product_name = $product['0'];
        //         }
        //     }
        //     return response()->json($order, 200);
        // }else
        // return response()->json('no orders found for this user');

    }

    public function change_order_status($id,Request $request){
        $order= Order::find($id);
        if($order){
            $order->update(['status' =>$request->status]);
            return response()->json('Thay đổi trạng thái thành công');
        } else return response()->json('Không tìm thấy đơn đặt hàng');
    }

    public function confirm_order(Request $request)
    {
        // Fetch cart items from session instead of request input
        // $cartItems = $request->input('cartItems', []);
        $cartItems = session('cart', []);

        if (empty($cartItems)) {
            return response()->json(['message' => 'Cart is empty!'], 400);
        }

        $total = 0;
        foreach ($cartItems as $item) {
            $total += $item['price'] * $item['quantity'];
        }

        try {
            // Create the order in the database
            $order = new Order();
            $order->user_id = Auth::id();
            $order->total_price = $total;
            $order->date_deliver = now();
            $order->payment_method = '1';  // Thanh toán bằng tiền mặt
            $order->status = 'Pending'; // Initial status
            $order->save();

            // Save order items and reduce stock
            foreach ($cartItems as $item) {
                // Find the product
                $product = Product::find($item['product_id']);
                if (!$product || $product->qty < $item['quantity']) {
                    return response()->json(['message' => 'Product stock is insufficient!'], 400);
                }

                // Create order item
                $orderItem = new OrderItem();
                $orderItem->order_id = $order->id;
                $orderItem->product_id = $item['product_id'];
                $orderItem->price = $item['price'];
                $orderItem->quantity = $item['quantity'];
                $orderItem->save();

                // Reduce product stock
                $product->qty -= $item['quantity'];
                $product->save();
            }

            // Update user's reward points
            $user = Auth::user();
            $user->points += floor($total / 1000); // Tiêu 1000 được 1 điểm
            $user->save();

            // Broadcast order completion event
            broadcast(new OrderCompletedEvent($order))->toOthers();

            // Send order confirmation email
            Mail::to($user->email)->send(new OrderInvoiceMail($order));

            // Clear the cart session
            session()->forget('cart');

            return response()->json(['message' => 'Order created successfully!', 'order' => $order], 201);
        } catch (\Exception $e) {
            // General error handling
            return response()->json(['message' => 'An error occurred! ' . $e->getMessage()], 500);
        }
    }


    // public function placeOrder(Request $request)
    // {
    //     $user = Auth::user();
    //     $totalPrice = 0;
    //     $couponDiscount = 0;

    //     // Validate request
    //     $validatedData = $request->validate([
    //         'products' => 'required|array', // Danh sách ID sản phẩm với số lượng
    //         'payment_method' => 'required|string',
    //         'code' => 'nullable|string',
    //     ]);

    //     // Kiểm tra xem phiếu giảm giá có hợp lệ không
    //     if ($request->has('code') && !empty($request->code)) {
    //         $coupon = Coupon::where('code', $request->code)->first();
    //         if (!$coupon) {
    //             return response()->json(['message' => 'Mã phiếu giảm giá không hợp lệ'], 400);
    //         }

    //         if ($coupon->time <= 0) {
    //             return response()->json(['message' => 'Phiếu giảm giá đã được sử dụng hết'], 400);
    //         }
    //     }

    //     // Tính tổng giá sản phẩm
    //     foreach ($request->products as $product_id => $quantity) {
    //         $product = Product::find($product_id);
    //         if (!$product || $product->qty < $quantity) {
    //             return response()->json(['message' => 'Sản phẩm không hợp lệ hoặc không đủ hàng'], 400);
    //         }
    //         $totalPrice += $product->price * $quantity;
    //     }

    //     // Áp dụng giảm giá phiếu giảm giá
    //     if (isset($coupon)) {
    //         if ($coupon->condition === 'percentage') {  // percentage nghĩa là tỷ lệ phần trăm (%)
    //             $couponDiscount = ($totalPrice * $coupon->number) / 100;
    //         } elseif ($coupon->condition === 'fixed') {
    //             $couponDiscount = $coupon->number;
    //         }

    //         $totalPrice -= $couponDiscount;
    //         $coupon->time -= 1; // Giảm số lượng sử dụng phiếu giảm giá
    //         $coupon->save();
    //     }

    //     // Tạo đơn hàng
    //     $order = Order::create([
    //         'user_id' => $user->id,
    //         'total_price' => $totalPrice,
    //         'payment_method' => $request->payment_method,
    //         'date_deliver' => now()->addDays(7), // Ví dụ: Giao hàng trong 7 ngày
    //         'status' => 'pending',
    //     ]);

    //     // Giảm lượng sản phẩm tồn kho và tạo OrderItem
    //     foreach ($request->products as $product_id => $quantity) {
    //         $product = Product::find($product_id);
    //         $product->qty -= $quantity;
    //         $product->save();

    //         $order->orderItems()->create([
    //             'product_id' => $product_id,
    //             'quantity' => $quantity,
    //             'price' => $product->price,
    //         ]);
    //     }

    //     // Cập nhật điểm thưởng cho người dùng
    //     $user->points += floor($totalPrice / 1000); // Tiêu 1000 được 1 điểm
    //     $user->save();

    //     // Phát sự kiện đơn hàng hoàn thành (realtime cho admin)
    //     broadcast(new OrderCompletedEvent($order))->toOthers();

    //     // Gửi email hóa đơn sau khi đặt hàng
    //     Mail::to(auth()->user()->email)->send(new OrderInvoiceMail($order));

    //     return response()->json(['message' => 'Đặt hàng thành công', 'order' => $order]);
    // }

}
