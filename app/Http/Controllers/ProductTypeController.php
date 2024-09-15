<?php

namespace App\Http\Controllers;

use App\Models\ProductType;
use Exception;
use Illuminate\Http\Request;

class ProductTypeController extends Controller
{
    //
    public function index()
    {
        $product_types = ProductType::paginate(10);
        return response()->json($product_types, 200);
    }

    public function show($id)
    {
        $product_type = ProductType::find($id);
        if ($product_type) {
            return response()->json($product_type, 200);
        } else
            return response()->json('product type not found');
    }
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|unique:product_types,name',

                'slug' => 'required',

                'status' => 'nullable',

            ]);

            $product_type = new ProductType();

            $product_type->name = $request->name;
            $product_type->slug = $request->slug;

            $product_type->status = $request->status;


            $product_type->save();
            return response()->json('product type added', 201);

        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }
    public function update($id, Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|unique:product_types,name',

                'slug' => 'required',

                'status' => 'nullable',

            ]);

            $product_type = ProductType::find($id);


            $product_type->name = $request->name;
            $product_type->slug = $request->slug;

            $product_type->status = $request->status;


            $product_type->update();
            return response()->json('product type updated', 200);
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }

    public function destroy($id)
    {
        $product_type = ProductType::find($id);
        if ($product_type) {
            $product_type->delete();
            return response()->json('product type deleted');
        } else
            return response()->json('product type not found');
    }
}
