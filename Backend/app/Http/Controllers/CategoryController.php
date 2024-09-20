<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Exception;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class CategoryController extends Controller
{
    //
    public function index()
    {
        $categories = Category::paginate(10);
        return response()->json($categories, 200);
    }

    public function show($id)
    {
        $category = Category::find($id);
        if ($category) {
            return response()->json($category, 200);
        } else
            return response()->json('category not found');
    }
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|unique:categories,name',
                'image' => 'required',
                'slug' => 'required',
                'sort_order' => 'required',
                'status' => 'nullable',
                'showHome' => 'nullable',
            ]);

            $category = new Category();
            if ($request->hasFile('image')) {
                $path = 'assets/uploads/category/' . $category->image;
                if (File::exists($path)) {
                    File::delete($path);
                }
                $file = $request->file('image');
                $ext = $file->getClientOriginalExtension();
                $filename = time() . '.' . $ext;
                try {
                    $file->move('assets/uploads/category' . $filename);
                } catch (FileException $e) {
                    dd($e);
                }
                $category->image = $filename;
            }
            $category->name = $request->name;
            $category->slug = $request->slug;
            $category->sort_order = $request->sort_order;
            $category->status = $request->status;
            $category->showHome = $request->showHome;

            $category->save();
            return response()->json('category added', 201);

        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }
    public function update($id, Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|unique:categories,name',
                'image' => 'required',
                'slug' => 'required',
                'sort_order' => 'required',
                'status' => 'nullable',
                'showHome' => 'nullable',
            ]);

            $category = Category::find($id);
            if ($request->hasFile('image')) {
                $path = 'assets/uploads/category/' . $category->image;
                if (File::exists($path)) {
                    File::delete($path);
                }
                $file = $request->file('image');
                $ext = $file->getClientOriginalExtension();
                $filename = time() . '.' . $ext;
                try {
                    $file->move('assets/uploads/category' . $filename);
                } catch (FileException $e) {
                    dd($e);
                }
                $category->image = $filename;
            }

            $category->name = $request->name;
            $category->slug = $request->slug;
            $category->sort_order = $request->sort_order;
            $category->status = $request->status;
            $category->showHome = $request->showHome;

            $category->update();
            return response()->json('category updated', 200);
        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }

    public function destroy($id)
    {
        $category = Category::find($id);
        if ($category) {
            $category->delete();
            return response()->json('category delete');
        } else
            return response()->json('category not found');
    }
}
