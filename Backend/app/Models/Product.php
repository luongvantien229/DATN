<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'slug',
        'price',
        'description',
        'brand_id',
        'category_id',
        
        'favorite',
        'view',
        'sku',
        'product_type_id',
        'image',
        'uses',
        'user_manual',
        'ingredient',
        'barcode',
        'track_qty',
        'qty',
        'status',
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function product_images(){
        return $this->hasMany(ProductImage::class);
    }

    public function categories()
{
    return $this->belongsToMany(Category::class);
}
}
