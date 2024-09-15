<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\QA;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    //
    public function __construct()
    {
        $list_categories = Category::where('status', '=', '1')
            ->where('showHome', 'Yes')->orderBy('sort_order')->get();
        $list_sub_categories = SubCategory::where('status', '=', '1')
            ->where('showHome', 'Yes')->get();
        $list_brands = Brand::where('status', '=', '1')->get();

        \View::share([
            'list_categories' => $list_categories,
            'list_sub_categories' => $list_sub_categories,
            'list_brands' => $list_brands,
        ]);
    }

    public function new_products()
    {
        $list_new_products = Product::where('status', 1)
            ->orderBy('created_at', 'desc')->limit(8)->get();


        return response()->json([
            'new_products' => $list_new_products,

        ], 200);
    }
    public function favorite_products()
    {

        $list_favorite_products = Product::where('status', 1)
            ->orderBy('created_at', 'desc')->limit(8)->get();

        return response()->json([

            'favorite_products' => $list_favorite_products,
        ], 200);
    }

    public function product_detail($id, Request $request)
    {

        $product = Product::find($id);
        if ($product === null) {
            return response()->json('Product not found', 404);
        }
        // $category_id = $product->category_id;
        // $related_products = Product::where('category_id', $category_id)
        //     ->orderBy('created_at', 'desc')
        //     ->limit(4)->get()->except($id);
        $list_qa = QA::where('product_id', $id)->orderBy('created_at', 'asc')->get();

        return response()->json([
            'list_qa' => $list_qa,
            'product' => $product,
            // 'related_products' => $related_products,
        ], 200);
    }

    public function related_products($id, Request $request)
    {

        $category_id = Category::find($id);
        $related_products = Product::where('category_id', $category_id)
            ->orderBy('created_at', 'desc')
            ->limit(4)->get()->except($id);

        return response()->json([

            'related_products' => $related_products,
        ], 200);
    }

}
