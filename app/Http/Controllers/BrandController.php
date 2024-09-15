<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Exception;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class BrandController extends Controller
{
    //
    public function index()
    {
        $brands = Brand::paginate(10);
        return response()->json($brands, 200);
    }

    public function show($id)
    {
        $brand = Brand::find($id);
        if ($brand) {
            return response()->json($brand, 200);
        } else
            return response()->json('brand not found');
    }
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|unique:brands,name',
                'slug' => 'required',
                'image' => 'required',
            ]);
            $brand = new Brand();
            if ($request->hasFile('image')) {
                $path = 'assets/uploads/brand/' . $brand->image;
                if (File::exists($path)) {
                    File::delete($path);
                }
                $file = $request->file('image');
                $ext = $file->getClientOriginalExtension();
                $filename = time() . '.' . $ext;
                try {
                    $file->move('assets/uploads/brand' . $filename);
                } catch (FileException $e) {
                    dd($e);
                }
                $brand->image = $filename;
            }
            $brand->name = $request->name;
            $brand->slug = $request->slug;
            $brand->status = $request->status;
            $brand->save();
            return response()->json('brand added', 201);

        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }
    public function update($id, Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|unique:brand,name',
                'slug' => 'required',
                'image' => 'required',
            ]);
            $brand = Brand::where('id', $id);
            if ($request->hasFile('image')) {
                $path = 'assets/uploads/brand/' . $brand->image;
                if (File::exists($path)) {
                    File::delete($path);
                }
                $file = $request->file('image');
                $ext = $file->getClientOriginalExtension();
                $filename = time() . '.' . $ext;
                try {
                    $file->move('assets/uploads/brand' . $filename);
                } catch (FileException $e) {
                    dd($e);
                }
                $brand->image = $filename;
            }
            $brand->name = $request->name;
            $brand->slug = $request->slug;
            $brand->status = $request->status;
            // ->update([
            //     'name' => $request->name,
            //     'slug' => $request->slug,
            //     'status' => $request->status
            // ]);
            $brand->update();
            return response()->json('brand updated', 200);
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }

    public function destroy($id)
    {
        $brand = Brand::find($id);
        if ($brand) {
            $brand->delete();
            return response()->json('brand delete');
        } else
            return response()->json('brand not found');
    }
}
