<?php

namespace App\Http\Controllers;

use App\Models\Warehouse;
use Illuminate\Http\Request;
use Exception;

class WarehouseController extends Controller
{
    // Lấy danh sách tất cả kho hàng
    public function index()
    {
        $warehouses = Warehouse::with(['user', 'products'])->get();
        return response()->json($warehouses, 200);
    }

    // Lấy thông tin chi tiết của một kho hàng cụ thể
    public function show($id)
    {
        $warehouse = Warehouse::with('products')->find($id);

        if (!$warehouse) {
            return response()->json(['message' => 'Warehouse not found'], 404);
        }

        return response()->json($warehouse, 200);
    }

    // Thêm kho hàng mới
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'location' => 'required|string',
            'user_id' => 'required|exists:users,id',
            'status' => 'required',
        ]);

        $warehouse = Warehouse::create($validatedData);
        return response()->json($warehouse, 201);
    }

    // Cập nhật thông tin kho hàng
    public function update(Request $request, $id)
    {
        $warehouse = Warehouse::find($id);

        if (!$warehouse) {
            return response()->json(['message' => 'Warehouse not found'], 404);
        }

        $validatedData = $request->validate([
            'location' => 'string',
            'user_id' => 'exists:users,id',
            'status' => 'required',
        ]);

        $warehouse->update($validatedData);
        return response()->json($warehouse, 200);
    }

    // Xóa kho hàng
    public function destroy($id)
    {
        $warehouse = Warehouse::find($id);

        if (!$warehouse) {
            return response()->json(['message' => 'Warehouse not found'], 404);
        }

        $warehouse->delete();
        return response()->json(['message' => 'Warehouse deleted'], 200);
    }

    // Thêm sản phẩm vào kho hàng với số lượng
    public function addProductToWarehouse(Request $request, $warehouseId)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $warehouse = Warehouse::find($warehouseId);

        if (!$warehouse) {
            return response()->json(['message' => 'Warehouse not found'], 404);
        }

        // Cập nhật hoặc tạo mới quantity trong warehouse_products
        $warehouse->products()->syncWithoutDetaching([
            $request->product_id => ['quantity' => $request->quantity],
        ]);

        return response()->json(['message' => 'Product added to warehouse'], 200);
    }

    // Xóa sản phẩm khỏi kho hàng
    public function removeProductFromWarehouse($warehouseId, $productId)
    {
        $warehouse = Warehouse::find($warehouseId);

        if (!$warehouse) {
            return response()->json(['message' => 'Warehouse not found'], 404);
        }

        $warehouse->products()->detach($productId);
        return response()->json(['message' => 'Product removed from warehouse'], 200);
    }
}
