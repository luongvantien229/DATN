<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Redirect;
use Session;

class CouponController extends Controller
{
    //
    public function index()
    {
        $coupons = Coupon::orderby('id', 'DESC')->paginate(10);
        return response()->json($coupons);
    }

    public function store(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'number' => 'required|integer',
            'code' => 'required|string|max:255|unique:coupons,code',
            'time' => 'required|integer',
            'condition' => 'required|integer',
            'date_start' => 'required|date',
            'date_end' => 'required|date',
            'status' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create the coupon
        $coupon = new Coupon($request->all());
        $coupon->save();

        return response()->json(['message' => 'Coupon created successfully', 'coupon' => $coupon], 201);
    }

    public function show($id)
    {
        $coupon = Coupon::find($id);

        if (!$coupon) {
            return response()->json(['message' => 'Coupon not found'], 404);
        }

        return response()->json($coupon);
    }

    public function update(Request $request, $id)
    {
        $coupon = Coupon::find($id);

        if (!$coupon) {
            return response()->json(['message' => 'Coupon not found'], 404);
        }

        // Validate the request
        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255',
            'number' => 'sometimes|required|integer',
            'code' => 'sometimes|required|string|max:255|unique:coupons,code,' . $coupon->id,
            'time' => 'sometimes|required|integer',
            'condition' => 'sometimes|required|integer',
            'date_start' => 'sometimes|required|date',
            'date_end' => 'sometimes|required|date',
            'status' => 'sometimes|required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }


        $coupon->fill($request->all());
        $coupon->save();

        return response()->json(['message' => 'Coupon updated successfully', 'coupon' => $coupon]);
    }

    public function destroy($id)
    {
        $coupon = Coupon::find($id);

        if (!$coupon) {
            return response()->json(['message' => 'Coupon not found'], 404);
        }

        $coupon->delete();

        return response()->json(['message' => 'Coupon deleted successfully']);
    }

    public function update_status(Request $request)
    {
        $data = $request->all();
        $coupon = Coupon::findOrFail($data['id']);
        $coupon->status = $data['status'];
        $coupon->save();
        return response()->json($coupon, 200);

    }

    // public function check_coupon(Request $request)
    // {
    //     // Get the coupon code directly
    //     $couponCode = $request->input('coupon');

    //     // Search for the coupon by its code
    //     $coupon = Coupon::where('code', $couponCode)->first();

    //     if ($coupon) {
    //         // Check if a coupon session exists
    //         $couponSession = Session::get('coupon');
    //         $cou = [];

    //         if ($couponSession) {
    //             $isAvailable = 0;

    //             // Add the coupon details to the session if not already available
    //             if ($isAvailable == 0) {
    //                 $cou[] = [
    //                     'code' => $coupon->code,
    //                     'condition' => $coupon->condition,
    //                     'number' => $coupon->number,
    //                 ];
    //                 Session::put('coupon', $cou);
    //             }
    //         } else {
    //             $cou[] = [
    //                 'code' => $coupon->code,
    //                 'condition' => $coupon->condition,
    //                 'number' => $coupon->number,
    //             ];
    //             Session::put('coupon', $cou);
    //         }

    //         Session::save();

    //         return response()->json([
    //             'success' => true,
    //             'coupon' => $coupon,
    //         ]);
    //     } else {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Invalid coupon code.',
    //         ]);
    //     }
    // }



    // public function check_coupon(Request $request)
    // {
    //     $today = Carbon::now('Asia/Ho_Chi_Minh')->format('d/m/Y');
    //     $couponCode = $request->input('coupon');

    //     if (Session::get('user_id')) {
    //         $coupon = Coupon::where('code', $couponCode)
    //             ->where('status', 1)
    //             ->where('date_end', '>=', $today)
    //             ->where('used', 'NOT LIKE', '%' . Session::get('user_id') . '%')
    //             ->first();

    //         if ($coupon) {
    //             return redirect()->back()->with('error', 'Mã giảm giá đã sử dụng, vui lòng nhập mã khác');
    //         } else {
    //             $coupon_login = Coupon::where('code', $couponCode)
    //                 ->where('status', 1)
    //                 ->where('date_end', '>=', $today)
    //                 ->first();

    //             $coupon_session = Session::get('coupon');
    //             if ($coupon_session == true) {
    //                 $is_available = 0;
    //                 if ($is_available == 0) {
    //                     $cou[] = array(
    //                         'code' => $coupon_login->code,
    //                         'condition' => $coupon_login->condition,
    //                         'number' => $coupon_login->number,
    //                     );
    //                     Session::put('coupon', $cou);
    //                 }
    //             } else {
    //                 $cou[] = array(
    //                     'code' => $coupon_login->code,
    //                     'condition' => $coupon_login->condition,
    //                     'number' => $coupon_login->number,
    //                 );
    //                 Session::put('coupon', $cou);
    //             }
    //             Session::save();
    //             return redirect()->back()->with('message', 'Thêm mã giảm giá thành công');
    //         }

    //         // nếu chưa đăng nhập
    //     } else {

    //         $coupon = Coupon::where('code', $couponCode)
    //             ->where('status', 1)
    //             ->where('date_end', '>=', $today)
    //             ->first();
    //         if ($coupon) {
    //             $count_coupon = $coupon->count();
    //             if ($count_coupon > 0) {
    //                 $coupon_session = Session::get('coupon');
    //                 if ($coupon_session == true) {
    //                     $is_available = 0;
    //                     if ($is_available == 0) {
    //                         $cou[] = array(
    //                             'code' => $coupon->code,
    //                             'condition' => $coupon->condition,
    //                             'number' => $coupon->number,
    //                         );
    //                         Session::put('coupon', $cou);
    //                     }
    //                 } else {
    //                     $cou[] = array(
    //                         'code' => $coupon->code,
    //                         'condition' => $coupon->condition,
    //                         'number' => $coupon->number,
    //                     );
    //                     Session::put('coupon', $cou);
    //                 }
    //                 Session::save();
    //                 return Redirect()->back()->with('message', 'Thêm mã giảm giá thành công!!');
    //             }
    //         } else {
    //             return Redirect()->back()->with('message', 'Thêm mã giảm giá không đúng.');
    //         }
    //     }
    // }

    public function check_coupon(Request $request)
    {
        $today = Carbon::now('Asia/Ho_Chi_Minh')->format('d/m/y');
        $couponCode = $request->input('coupon');
        $userId = auth()->id();

        // Step 1: Check if user is logged in and if the coupon has been used
        if ($userId) {
            $coupon = Coupon::where('code', $couponCode)
                ->where('status', 1)
                ->where('date_end', '>=', $today)
                ->where('used', 'NOT LIKE', '%' . $userId . '%')
                ->first();

            if ($coupon) {
                return response()->json([
                    'success' => false,
                    'used' => true,
                    'message' => 'Mã giảm giá đã sử dụng, vui lòng nhập mã khác',
                ]);
            }
        }

        // Step 2: Find an active, non-expired coupon
        $coupon = Coupon::where('code', $couponCode)
            ->where('status', 1)
            ->where('date_end', '>=', $today)
            ->first();

        if ($coupon) {

            $couponSession = Session::get('coupon', []);

            // Check if the coupon is already in the session
            $isAvailable = collect($couponSession)->contains('code', $couponCode);

            if (!$isAvailable) {
                // Add the coupon details to the session if it's not already there
                $couponSession[] = [
                    'code' => $coupon->code,
                    'condition' => $coupon->condition,
                    'number' => $coupon->number,
                ];
                Session::put('coupon', $couponSession);
                Session::save();
            }

            return response()->json([
                'success' => true,
                'message' => 'Thêm mã giảm giá thành công',
                'coupon' => $coupon,
            ]);

        } else {
            return response()->json([
                'success' => false,
                'message' => 'Mã giảm giá không hợp lệ hoặc đã hết hạn',
            ]);
        }

        // Step 3: Handle adding the coupon to the session

    }

}
