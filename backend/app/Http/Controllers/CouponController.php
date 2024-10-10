<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
            'code' => 'required|string|max:255|unique:coupons,coupon_code',
            'time' => 'required|integer',
            'condition' => 'required|integer'
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
            'code' => 'sometimes|required|string|max:255|unique:coupons,coupon_code,' . $coupon->id,
            'time' => 'sometimes|required|integer',
            'condition' => 'sometimes|required|integer'
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
}
