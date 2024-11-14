<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Brand;
use App\Models\Category;
use App\Models\CategoryPost;
use App\Models\Comment;
use App\Models\Post;
use App\Models\Product;
use App\Models\QA;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class IndexController extends Controller
{
    //
    public function __construct()
    {
        $list_categories = Category::where('status', '=', '1')
            ->where('showHome', 'Yes')->orderBy('sort_order')->get();
        // $list_sub_categories = SubCategory::where('status', '=', '1')
        //     ->where('showHome', 'Yes')->get();
        $list_brands = Brand::where('status', '=', '1')->get();

        \View::share([
            'list_categories' => $list_categories,
            // 'list_sub_categories' => $list_sub_categories,
            'list_brands' => $list_brands,
        ]);
    }

    public function all_brands()
    {
        $brands = Brand::where('status', 1)
            ->withCount('products')
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json([
            'brands' => $brands,
        ], 200);
    }
    public function all_categories()
    {
        $categories = Category::where('status', 1)
            ->orderBy('created_at', 'desc')->get();

        $listCategory = [];
        Category::recursive($categories, 0, 1, $listCategory);

        return response()->json([
            'categories' => $listCategory,
        ], 200);
    }


    public function all_products()
    {
        $products = Product::where('status', 1)
            ->orderBy('created_at', 'desc')->get();


        return response()->json([
            'products' => $products,

        ], 200);
    }

    public function all_posts()
    {
        $posts = Post::where('status', 1)
            ->orderBy('created_at', 'desc')->get();

        return response()->json([
            'posts' => $posts,

        ], 200);
    }

    public function all_category_posts()
    {
        $categoryPosts = CategoryPost::where('status', 1)
            ->orderBy('created_at', 'desc')->get();


        return response()->json([
            'categoryPosts' => $categoryPosts,

        ], 200);
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

    public function product_detail($slug, $id, Request $request)
    {

        $product = Product::find($id);
        if ($product === null) {
            return response()->json('Product not found', 404);
        }
        $category_id = $product->category_id;
        $related_products = Product::where('category_id', $category_id)
            ->orderBy('created_at', 'desc')
            ->limit(4)->get()->except($id);
        // $list_qa = QA::where('product_id', $id)->orderBy('created_at', 'asc')->get();

        return response()->json([
            // 'list_qa' => $list_qa,
            'product' => $product,
            'related_products' => $related_products,
        ], 200);
    }




    // public function related_products($id, Request $request)
    // {

    //     $category_id = Category::find($id);
    //     $related_products = Product::where('category_id', $category_id)
    //         ->orderBy('created_at', 'desc')
    //         ->limit(4)->get()->except($id);

    //     return response()->json([

    //         'related_products' => $related_products,
    //     ], 200);
    // }


    // public function search(Request $request)
    // {



    //     // Keywords for search
    //     $keywords = $request->input('keywords_submit', '');



    //     // Search products by name
    //     $searchResults = Product::where('name', 'like', '%' . $keywords . '%')
    //         ->get();

    //     // Return JSON response
    //     return response()->json([

    //         'searchResults' => $searchResults
    //     ]);
    // }

    public function searchSuggestions(Request $request)
    {
        // Nhận từ khóa tìm kiếm từ request
        $searchTerm = $request->query('keywords_suggest');

        // Tìm kiếm sản phẩm dựa trên tên hoặc mô tả
        $suggestions = Product::where('name', 'LIKE', '%' . $searchTerm . '%')
            ->orWhere('description', 'LIKE', '%' . $searchTerm . '%')
            ->take(10) // Lấy tối đa 10 kết quả
            ->get(['id', 'name', 'slug', 'image', 'price']); // Lấy các trường cần thiết cho gợi ý

        // Trả về kết quả dưới dạng JSON
        return response()->json($suggestions);
    }




    // public function filter(Request $request)
    // {
    //     $request->validate([
    //         'category_id' => 'nullable|integer',
    //         'brand_id' => 'nullable|integer',
    //         'subcategory_id' => 'nullable|integer',
    //         'min_price' => 'nullable|numeric',
    //         'max_price' => 'nullable|numeric',
    //     ]);

    //     try {
    //         $query = Product::query();

    //         if ($request->has('category_id') && !empty($request->category_id)) {
    //             $query->where('category_id', $request->category_id);
    //         }

    //         if ($request->has('brand_id') && !empty($request->brand_id)) {
    //             $query->where('brand_id', $request->brand_id);
    //         }

    //         if ($request->has('subcategory_id') && !empty($request->subcategory_id)) {
    //             $query->where('subcategory_id', $request->subcategory_id);
    //         }
    //         if ($request->has('min_price') && $request->has('max_price')) {
    //             if (!empty($request->min_price) && !empty($request->max_price)) {
    //                 $min = (float)$request->min_price;
    //                 $max = (float)$request->max_price;

    //                 // Check if min price is less than max price
    //                 if ($min <= $max) {
    //                     $query->whereBetween('price', [$min, $max]);
    //                 } else {
    //                     return response()->json(['error' => 'Min price must be less than max price'], 400);
    //                 }
    //             }
    //         }
    //         $products = $query->get();

    //         return response()->json($products);

    //     } catch (\Exception $e) {
    //         Log::error('Error filtering products: ' . $e->getMessage());
    //         Log::info('Filtering products with params:', $request->all());

    //         return response()->json(['error' => 'Internal Server Error'], 500);
    //     }
    // }



    public function filter(Request $request)
    {

        $query = Product::query();

        // Filtering by brand
        if ($request->has('brand_id') && !empty($request->brand_id)) {
            $query->where('brand_id', $request->brand_id);
        }

        // Filtering by category
        if ($request->has('category_id') && !empty($request->category_id)) {
            $query->where('category_id', $request->category_id);
        }



        // Sorting products
        if ($request->has('sort_by')) {
            $sort_by = $request->query('sort_by');
            switch ($sort_by) {
                case 'DESC':
                    $query->orderBy('price', 'DESC');
                    break;
                case 'ASC':
                    $query->orderBy('price', 'ASC');
                    break;
                case 'Sort_A_Z':
                    $query->orderBy('name', 'ASC');
                    break;
                case 'Sort_Z_A':
                    $query->orderBy('name', 'DESC');
                    break;
                case 'newest':
                    $query->orderBy('id', 'DESC');
                    break;
                default:
                    $query->orderBy('id', 'DESC');
                    break;
            }
        } else {
            // Default sorting if sort_by is not provided
            $query->orderBy('id', 'DESC');
        }



        if ($request->has('price')) {
            $price = $request->query('price');
            switch ($price) {
                case '1':
                    $query->where('price', '<', 20000);
                    break;
                case '2':
                    $query->whereBetween('price', [20000, 50000]);
                    break;
                case '3':
                    $query->whereBetween('price', [50000, 100000]);
                    break;
                case '4':
                    $query->whereBetween('price', [100000, 200000]);
                    break;
                case '5':
                    $query->whereBetween('price', [200000, 300000]);
                    break;
                case '6':
                    $query->where('price', '>', 300000);
                    break;
            }
        }

        // // Filtering by price range
        // if ($request->has('start_price') && $request->has('end_price')) {
        //     $min_price = (float) $request->query('start_price');
        //     $max_price = (float) $request->query('end_price');
        //     $query->whereBetween('price', [$min_price, $max_price]);
        // }

        // // Default ordering if no filter is applied
        // if (!$request->has('sort_by') && !$request->has('start_price') && !$request->has('end_price') && !$request->has('brand_id') && !$request->has('subcategory_id')) {
        //     $query->orderBy('id', 'DESC');
        // }

        // Paginate the results
        $products = $query->paginate(6);

        // // Min and Max price for filters
        // $min_price = Product::min('price');
        // $max_price = Product::max('price');
        // $min_price_range = $min_price + 500000;
        // $max_price_range = $max_price + 10000000;

        // Prepare the response data
        $response = [
            'products' => $products,
            'pagination' => [
                'current_page' => $products->currentPage(),
                'last_page' => $products->lastPage(),
                'total' => $products->total(),
            ],
        ];

        // Return JSON response
        return response()->json($response);
    }


    public function filter_post(Request $request)
    {

        $query = Post::query();



        // Filtering by category
        if ($request->has('category_id') && !empty($request->category_id)) {
            $query->where('category_posts_id', $request->category_id);
        }



        // Sorting products
        if ($request->has('sort_by')) {
            $sort_by = $request->query('sort_by');
            switch ($sort_by) {
                case 'DESC':
                    $query->orderBy('created_at', 'DESC');
                    break;
                case 'ASC':
                    $query->orderBy('created_at', 'ASC');
                    break;
                case 'Sort_A_Z':
                    $query->orderBy('title', 'ASC');
                    break;
                case 'Sort_Z_A':
                    $query->orderBy('title', 'DESC');
                    break;
            }
        }





        // Paginate the results
        $posts = $query->paginate(6);




        $response = [
            'posts' => $posts,

        ];

        // Return JSON response
        return response()->json($response);
    }


}
