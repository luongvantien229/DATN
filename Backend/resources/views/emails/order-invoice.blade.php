<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hóa Đơn Đặt Hàng Của Bạn</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        h3 {
            color: #444;
        }
        p {
            line-height: 1.5;
            color: #555;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            background: #f1f1f1;
            margin: 5px 0;
            padding: 10px;
            border-radius: 4px;
        }
        .total {
            font-weight: bold;
            font-size: 1.2em;
            margin-top: 10px;
            color: #d9534f;
        }
        .footer {
            margin-top: 20px;
            font-size: 0.9em;
            color: #777;
        }
        .table-styling {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        .table-styling thead {
            background-color: #f2f2f2;
        }
        .table-styling, .table-styling th, .table-styling td {
            border: 1px solid #000;
        }
        .table-styling th, .table-styling td {
            padding: 8px;
            text-align: left;
        }
        .text-end {
            text-align: right;
            margin-top: 20px;
        }
        .signature-table {
            width: 100%;
            margin-top: 20px;
        }
        .signature-table th {
            text-align: center;
        }
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        .logo img {
            max-width: 150px;
        }
        h1, h4 {
            text-align: center;
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Cảm ơn bạn đã mua hàng, {{ $order->user->name }}!</h1>
        <p>Dưới đây là chi tiết đơn hàng của bạn:</p>

        <div class="logo">
            <img src="./assets/images/logo/logoo.png" alt="Logo">
        </div>
        <h1>Hiệu thuốc Yên Tâm</h1>
        <h4>Độc lập - Tự do - Hạnh phúc</h4>';
        <!-- Order details -->
        <h3>Đơn hàng #{{ $order->order_code }}</h3>
        <p style="margin: 0;">
            <strong>Ngày tạo:</strong> {{ \Carbon\Carbon::parse($order->date_deliver)->format('d/m/Y') }}
        </p>
        <p style="margin: 0;">
            Địa chỉ: Số 123 Đường ABC, Quận XYZ, TP.HCM
        </p>
        <p style="margin: 5px 0; font-size: 14px;">
            Số điện thoại: 0123-456-789
        </p>
        <br>

        <!-- Customer details -->
        <p><strong>Người đặt hàng:</strong></p>
        <table class="table-styling">
            <thead>
                <tr>
                    <th>Tên khách đặt</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ $user->name }}</td>
                    <td>{{ $user->phone }}</td>
                    <td>{{ $user->email }}</td>
                </tr>
            </tbody>
        </table>

        <!-- Shipping details -->
        <p><strong>Giao hàng tới:</strong></p>
        <table class="table-styling">
            <thead>
                <tr>
                    <th>Tên người nhận</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Ghi chú *</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ $order->shipname }}</td>
                    <td>{{ $order->shipphone }}</td>
                    <td>{{ $order->address }}</td>
                    <td>{{ $order->note }}</td>
                </tr>
            </tbody>
        </table>

        <!-- Order items -->
        <p><strong>Đơn hàng đặt:</strong></p>
        <table class="table-styling">
            <thead>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Mã giảm giá</th>
                    <th>Số lượng</th>
                    <th>Giá sản phẩm</th>
                    <th>Thành tiền</th>
                </tr>
            </thead>
            <tbody>
                @php
                    $total = 0;
                @endphp
                @foreach ($order->items as $item)
                    @php
                        $subtotal = $item->price * $item->quantity;
                        $total += $subtotal;
                    @endphp
                    <tr>
                        <td>{{ $item->product->name }}</td>
                        <td>{{ $coupon_code ?? 'Không mã' }}</td>
                        <td>{{ $item->quantity }}</td>
                        <td>{{ number_format($item->price, 0, ',', '.') }}đ</td>
                        <td>{{ number_format($subtotal, 0, ',', '.') }}đ</td>
                    </tr>
                @endforeach

                <!-- Calculating totals -->
                @php
                    $discount = $coupon_condition == 1 ? ($total * $coupon_number) / 100 : $coupon_number;
                    $total_after_discount = $total - $discount + $feeShip;
                @endphp

                <tr>
                    <td colspan="4" style="text-align: right;"><strong>Phí vận chuyển:</strong></td>
                    <td>{{ number_format($feeShip, 0, ',', '.') }}đ</td>
                </tr>
                <tr>
                    <td colspan="4" style="text-align: right;"><strong>Tổng giảm:</strong></td>
                    <td>{{ $coupon_echo }}</td>
                </tr>
                <tr>
                    <td colspan="4" style="text-align: right;"><strong>Thanh toán:</strong></td>
                    <td>{{ number_format($total_after_discount, 0, ',', '.') }}đ</td>
                </tr>
            </tbody>
        </table>

        <!-- Signature section -->
        <p class="text-end" style="margin-top: 30px; font-weight: bold;">Ký tên</p>
        <table class="signature-table" style="width: 100%; margin-top: 30px; border-collapse: collapse;">
            <thead>
                <tr>
                    <th style="width: 50%; text-align: center; border: none;">Người lập phiếu</th>
                    <th style="width: 50%; text-align: center; border: none;">Người nhận</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="text-align: center; padding-top: 30px;">______________________</td>
                    <td style="text-align: center; padding-top: 30px;">______________________</td>
                </tr>
            </tbody>
        </table>

        <!-- Footer -->
        <p>Chúng tôi hy vọng sẽ gặp lại bạn sớm!</p>
        <p>Trân trọng,</p>
        <p>Đội ngũ {{ config('app.name') }}</p>
        <div class="footer">
            <p>Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi qua email này.</p>
        </div>
    </div>
</body>
</html>
