<?php

namespace App\Http\Controllers;

use App\Models\Warehouse;
use Exception;
use Illuminate\Http\Request;

class WarehouseController extends Controller
{
    //
    public function index()
    {
        $warehouses = Warehouse::with('users')->get();
        return response()->json('warehouses', 200);
    }
    public function show($id)
    {
        $warehouse = Warehouse::with('products')->find($id);
        return response()->json('warehouse');
    }
}
