<?php

use App\Http\Controllers\Auth\FacebookController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Controllers\CallStringeeController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CategoryPostController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductTypeController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\WarehouseProductController;
use App\Http\Controllers\ImageSearchController;
use App\Http\Middleware\AdminMiddleware;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api')->name('logout');
    Route::post('/refresh', [AuthController::class, 'refresh'])->middleware('auth:api')->name('refresh');
    Route::get('/your_profile', [AuthController::class, 'your_profile'])->middleware('auth:api')->name('your_profile');
    Route::post('/forgot-password', [ForgotPasswordController::class, 'sendResetLinkEmail']);
    Route::get('password/reset/{token}', [ForgotPasswordController::class, 'showResetForm'])->name('password.reset');

    // Route để xử lý việc cập nhật mật khẩu
    Route::post('password/reset', [ForgotPasswordController::class, 'reset'])->name('password.update');

});

// Roles CRUD routes
Route::group(['prefix' => 'roles'], function ($router) {
    Route::controller(RoleController::class)->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
        Route::post('/store', 'store');
        Route::post('/update/{id}', 'update')->middleware('admin');
        Route::delete('/destroy/{id}', 'destroy');
    });
});

// Users CRUD routes
Route::group(['prefix' => 'users', 'middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(UserController::class)->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
        Route::post('/store', 'store');
        Route::post('/update/{id}', 'update');
        Route::delete('/destroy/{id}', 'destroy');
        Route::post('/change_user_lock/{id}', 'change_user_lock');
    });
});

// Warehouse CRUD routes
Route::group(['prefix' => 'Warehouses', 'middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(WarehouseController::class)->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
    });
});
// Warehouse Products CRUD routes
Route::group(['prefix' => 'warehouse_products', 'middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(WarehouseProductController::class)->group(function () {
        Route::post('/store/warehouses/{warehouse_id}/products', 'store');
        Route::post('/update/warehouses/{warehouse_id}/products/{product_id}', 'update');
        Route::delete('/destroy/warehouses/{warehouse_id}/products/{product_id}', 'destroy');
    });
});

// Brands CRUD routes
Route::group(['prefix' => 'brands', 'middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(BrandController::class)->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
        Route::post('/store', 'store');
        Route::post('/update/{id}', 'update');
        Route::delete('/destroy/{id}', 'destroy');
        Route::post('/export-csv', 'export-csv');
        Route::post('/import-csv', 'import-csv');
    });
});

// Categories CRUD routes
Route::group(['prefix' => 'categories', 'middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(CategoryController::class)->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
        Route::post('/store', 'store');
        Route::post('/update/{id}', 'update');
        Route::delete('/destroy/{id}', 'destroy');
    });
});

// Sub Categories CRUD routes
// Route::group(['prefix' => 'sub_categories','middleware' => [AdminMiddleware::class]], function ($router) {
//     Route::controller(SubCategoryController::class)->group(function () {
//         Route::get('index', 'index');
//         Route::get('show/{id}', 'show');
//         Route::post('store', 'store');
//         Route::put('update/{id}', 'update');
//         Route::delete('destroy/{id}', 'destroy');
//     });
// });

// Product types CRUD routes
Route::group(['prefix' => 'product_types', 'middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(ProductTypeController::class)->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
        Route::post('/store', 'store');
        Route::post('/update/{id}', 'update');
        Route::delete('/destroy/{id}', 'destroy');
    });
});

// Products CRUD routes
Route::group(['prefix' => 'products', 'middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(ProductController::class)->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
        Route::post('/store', 'store');
        Route::post('/update/{id}', 'update');
        Route::delete('/destroy/{id}', 'destroy');
    });
});


// Orders CRUD routes
Route::group(['prefix' => 'orders'], function ($router) {
    Route::controller(OrderController::class)->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
        Route::post('/store', 'store');
        Route::post('/update/{id}', 'update');
        Route::get('/get_order_items/{id}', 'get_order_items')->middleware('admin');
        Route::get('/get_user_orders/{id}', 'get_user_orders')->middleware('admin');
        Route::post('/change_order_status/{id}', 'change_order_status');
        Route::post('/print_order/{checkout_code}', 'print_order');
    });
});

// Banners CRUD routes
Route::group(['prefix' => 'banners', 'middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(BannerController::class)->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
        Route::post('/store', 'store');
        Route::post('/update/{id}', 'update');
        Route::delete('/destroy/{id}', 'destroy');
    });
});

// Categories Post CRUD routes
Route::group(['prefix' => 'category_posts', 'middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(CategoryPostController::class)->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
        Route::post('/store', 'store');
        Route::post('/update/{id}', 'update');
        Route::delete('/destroy/{id}', 'destroy');
    });
});

// Post CRUD routes
Route::group(['prefix' => 'posts'], function ($router) {
    Route::controller(PostController::class)->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
        Route::post('/store', 'store');
        Route::post('/update/{id}', 'update');
        Route::delete('/destroy/{id}', 'destroy');
    });
});

// Contact routers
Route::group(['prefix' => 'contacts', 'middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(ContactController::class)->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
        Route::delete('/destroy/{id}', 'destroy');
    });
});



// Site Users routes
Route::get('/all_products', [IndexController::class, 'all_products']);
Route::get('/all_brands', [IndexController::class, 'all_brands']);
Route::get('/all_categories', [IndexController::class, 'all_categories']);
Route::get('/all_category_posts', [IndexController::class, 'all_category_posts']);
Route::get('/new_products', [IndexController::class, 'new_products']);
Route::get('/favorite_products', [IndexController::class, 'favorite_products']);
Route::get('/product_detail/{slug}/{id}', [IndexController::class, 'product_detail']);
Route::get('banners/size/{size}', [BannerController::class, 'getBannersBySize']); // ví dụ: GET /api/banners/size/1 để lấy các banner có kích thước 800x600;
                                                                                               // GET /api/banners/size/2 để lấy các banner có kích thước 650x250.
// Route::get('/search', [IndexController::class, 'search']);
Route::get('/search-suggestions', [IndexController::class, 'searchSuggestions']);
Route::post('/image-search', [ImageSearchController::class, 'searchByImage']);
Route::post('/contacts', [ContactController::class, 'store']);  // Gửi liên hệ
Route::post('/add_comments', [CommentController::class, 'store']);  // Gửi bình luận
Route::post('/comments', [CommentController::class, 'index']);  // DS bình luận
Route::post('/delete_comments', [CommentController::class, 'destroy']);  // xóa bình luận

Route::get('/filter', [IndexController::class, 'filter']);
Route::get('/filter_post', [IndexController::class, 'filter_post']);
Route::get('/generate-token', [CallStringeeController::class, 'generateToken']);

// Login Google Account

Route::get('/login-google', [GoogleController::class, 'login_google']);
Route::get('/login/google/callback', [GoogleController::class, 'callback_google']);

Route::get('/login-customer-google', [GoogleController::class, 'login_customer_google']);
Route::get('/customer/google/callback', [GoogleController::class, 'callback_customer_google']);

// Login Facebook Account

Route::get('/login-facebook', [FacebookController::class, 'login_facebook']);
Route::get('/login/facebook/callback', [FacebookController::class, 'callback_facebook']);

Route::get('/login-customer-facebook', [FacebookController::class, 'login_customer_facebook']);
Route::get('/customer/facebook/callback', [FacebookController::class, 'callback_customer_facebook']);


// Route::group([
//     'middleware' => 'api',
//     'prefix' => 'auth'
// ], function ($router) {
//     Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
//         // Extract the user from the token to ensure they are authenticated
//         $user = JWTAuth::parseToken()->authenticate();

//         // Check if the user is authenticated
//         if ($user) {
//             // Fulfill the email verification request
//             $request->fulfill();

//             // Redirect or return a JSON response after successful verification
//             return redirect('/')->with('message', 'Email verified successfully!');
//         }

//         // Return an error if the user is not authenticated
//         return response()->json(['message' => 'Unauthorized'], 401);
//     })->middleware(['signed'])->name('verification.verify');
//     Route::get('/email/verify', function () {
//         return response()->json([
//             'message' => 'Please verify your email address.'
//         ], 200);
//     })->name('verification.notice');


// });



// Route::post('/cart/add', [CartController::class, 'addToCart']);
// Route::get('/cart', [CartController::class, 'viewCart']);
// Route::delete('/cart/remove/{id}', [CartController::class, 'removeFromCart']);
// Route::delete('/cart/clear', [CartController::class, 'clearCart']);


Route::post('/confirm_order', [OrderController::class, 'confirm_order']);
Route::post('/pay/order', [PaymentController::class, 'payByStripe']);
Route::post('/pay', [PaymentController::class, 'pay']);
