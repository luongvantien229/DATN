<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function __construct()
    {
        $list_categories = Category::where('status', '=', '1')
            ->where('showHome', 'Yes')->orderBy('sort_order')->get();

        $list_brands = Brand::where('status', '=', '1')->get();

        \View::share([
            'list_categories' => $list_categories,
           
            'list_brands' => $list_brands,
        ]);
    }
}
