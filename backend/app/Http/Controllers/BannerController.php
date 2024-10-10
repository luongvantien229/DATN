<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class BannerController extends Controller
{
    //
    public function index()
    {
        $banners = Banner::orderBy('id', 'DESC')->paginate(10);
        return response()->json($banners);
    }

    // Store a new slider
    public function store(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'image_path' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'status' => 'required|boolean',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Handle the image upload
        if ($request->hasFile('image_path')) {
            $image_path = $request->file('image_path');
            $path = $image_path->store('public/uploads/banner');
            $imageName = basename($path);

            // Create the slider
            $banner = new Banner();
            $banner->name = $request->input('name');
            $banner->image_path = $imageName;
            $banner->status = $request->input('status');
            $banner->description = $request->input('description');
            $banner->save();

            return response()->json(['message' => 'Banner created successfully', 'banner' => $banner], 201);
        } else {
            return response()->json(['message' => 'Please upload an image'], 422);
        }
    }

    // Display a specific slider
    public function show($id)
    {
        $banner = Banner::find($id);

        if (!$banner) {
            return response()->json(['message' => 'Banner not found'], 404);
        }

        return response()->json($banner);
    }

    // Update a specific slider
    public function update(Request $request, $id)
    {
        $banner = Banner::find($id);

        if (!$banner) {
            return response()->json(['message' => 'Banner not found'], 404);
        }

        // Validate the request
        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255',
            'image_path' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'status' => 'sometimes|required|boolean',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Handle the image upload if present
        if ($request->hasFile('image_path')) {
            // Delete the old image
            if ($banner->image_path) {
                Storage::delete('public/uploads/banner/' . $banner->image_path);
            }

            // Store the new image
            $image_path = $request->file('image_path');
            $path = $image_path->store('public/uploads/slider');
            $imageName = basename($path);
            $banner->image_path = $imageName;
        }

        // Update the slider data
        $banner->update($request->only('name', 'status', 'description'));

        return response()->json(['message' => 'Banner updated successfully', 'banner' => $banner]);
    }

    // Delete a specific slider
    public function destroy($id)
    {
        $banner = Banner::find($id);

        if (!$banner) {
            return response()->json(['message' => 'Slider not found'], 404);
        }

        // Delete the image from storage
        if ($banner->image_path) {
            Storage::delete('public/uploads/banner/' . $banner->image_path);
        }

        $banner->delete();

        return response()->json(['message' => 'Banner deleted successfully']);
    }

    // Activate a slider
    public function activate($id)
    {
        $banner = Banner::find($id);

        if (!$banner) {
            return response()->json(['message' => 'Banner not found'], 404);
        }

        $banner->status = 1;
        $banner->save();

        return response()->json(['message' => 'Banner activated successfully']);
    }

    // Deactivate a slider
    public function deactivate($id)
    {
        $banner = Banner::find($id);

        if (!$banner) {
            return response()->json(['message' => 'Banner not found'], 404);
        }

        $banner->status = 0;
        $banner->save();

        return response()->json(['message' => 'Banner deactivated successfully']);
    }
}
