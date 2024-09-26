<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'slug',
        'sort_order',
        'status',
        'image',
        'showHome',
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

   

    public function products()
{
    return $this->belongsToMany(Product::class);
}
}
