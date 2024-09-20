<?php

use App\Http\Controllers\BrandController;
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
use App\Http\Middleware\AdminMiddleware;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api')->name('logout');
    Route::post('/refresh', [AuthController::class, 'refresh'])->middleware('auth:api')->name('refresh');
    Route::get('/your_profile', [AuthController::class, 'your_profile'])->middleware('auth:api')->name('your_profile');
    Route::post('forgot-password', [ForgotPasswordController::class, 'sendResetLinkEmail']);

});

// Roles CRUD routes
Route::group(['prefix' => 'roles'], function ($router) {
    Route::controller(RoleController::class)->group(function () {
        Route::get('index', 'index');
        Route::get('show/{id}', 'show');
        Route::post('store', 'store');
        Route::put('update/{id}', 'update')->middleware('admin');
        Route::delete('destroy/{id}', 'destroy');
    });
});

// Brands CRUD routes
Route::group(['prefix' => 'brands','middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(BrandController::class)->group(function () {
        Route::get('index', 'index');
        Route::get('show/{id}', 'show');
        Route::post('store', 'store');
        Route::put('update/{id}', 'update');
        Route::delete('destroy/{id}', 'destroy');
    });
});

// Categories CRUD routes
Route::group(['prefix' => 'categories','middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(CategoryController::class)->group(function () {
        Route::get('index', 'index');
        Route::get('show/{id}', 'show');
        Route::post('store', 'store');
        Route::put('update/{id}', 'update');
        Route::delete('destroy/{id}', 'destroy');
    });
});

// Sub Categories CRUD routes
Route::group(['prefix' => 'sub_categories','middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(SubCategoryController::class)->group(function () {
        Route::get('index', 'index');
        Route::get('show/{id}', 'show');
        Route::post('store', 'store');
        Route::put('update/{id}', 'update');
        Route::delete('destroy/{id}', 'destroy');
    });
});

// Product types CRUD routes
Route::group(['prefix' => 'product_types','middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(ProductTypeController::class)->group(function () {
        Route::get('index', 'index');
        Route::get('show/{id}', 'show');
        Route::post('store', 'store');
        Route::put('update/{id}', 'update');
        Route::delete('destroy/{id}', 'destroy');
    });
});

// Products CRUD routes
Route::group(['prefix' => 'products','middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(ProductController::class)->group(function () {
        Route::get('index', 'index');
        Route::get('show/{id}', 'show');
        Route::post('store', 'store');
        Route::put('update/{id}', 'update');
        Route::delete('destroy/{id}', 'destroy');
    });
});


// Orders CRUD routes
Route::group(['prefix' => 'orders'], function ($router) {
    Route::controller(OrderController::class)->group(function () {
        Route::get('index', 'index');
        Route::get('show/{id}', 'show');
        Route::post('store', 'store');
        Route::put('update/{id}', 'update');
        Route::get('get_order_items/{id}', 'get_order_items')->middleware('admin');
        Route::get('get_user_orders/{id}', 'get_user_orders')->middleware('admin');
        Route::post('change_order_status/{id}', 'change_order_status')->middleware('admin');
    });
});

// Categories Post CRUD routes
Route::group(['prefix' => 'categories','middleware' => [AdminMiddleware::class]], function ($router) {
    Route::controller(CategoryPostController::class)->group(function () {
        Route::get('index', 'index');
        Route::get('show/{id}', 'show');
        Route::post('store', 'store');
        Route::put('update/{id}', 'update');
        Route::delete('destroy/{id}', 'destroy');
    });
});


// Site Users routes

Route::get('/new_products',[IndexController::class,'new_products']);
Route::get('/favorite_products',[IndexController::class,'favorite_products']);




Route::post('/cart/add', [CartController::class, 'addToCart']);
Route::get('/cart', [CartController::class, 'viewCart']);
Route::delete('/cart/remove/{id}', [CartController::class, 'removeFromCart']);
Route::delete('/cart/clear', [CartController::class, 'clearCart']);



Route::post('/pay/order', [PaymentController::class, 'payByStripe']);
