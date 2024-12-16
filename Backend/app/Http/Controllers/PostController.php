<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class PostController extends Controller
{
    // List all posts with pagination and related data
    public function index()
    {
        $posts = Post::with(['users', 'category_posts'])->paginate(10); // Assuming relationships 'user' and 'categoryPost'
        return response()->json($posts, 200);
    }

    // Display a single post by ID
    public function show($id)
    {
        $post = Post::with(['users', 'category_posts'])->find($id);
        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }
        return response()->json($post, 200);
    }

    // Create a new post
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'slug' => 'required|string',
                'description' => 'required|string',
                'content' => 'required|string',
                'image' => 'required|image|mimes:jpg,png,jpeg,gif|max:2048',
                'user_id' => 'required|exists:users,id',
                'category_posts_id' => 'required|exists:category_posts,id',
                'status' => 'nullable|integer',
            ]);

            $post = new Post();

            $post->fill($validated);
            // Handle image upload
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $filename = time() . '.' . $file->getClientOriginalExtension();
                $file->move('assets/uploads/post/', $filename);
                $post->image = $filename;
            }
            $post->save();

            return response()->json(['message' => 'Post created successfully', 'data' => $post], 201);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Update an existing post
    public function update($id, Request $request)
    {
        try {
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'slug' => 'required|string',
                'description' => 'required|string',
                'content' => 'required|string',
                'image' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
                'category_posts_id' => 'required|exists:category_posts,id',
                'status' => 'nullable|integer',
            ]);

            $post = Post::findOrFail($id);



            $post->fill($validated);
            if ($request->hasFile('image')) {
                // Delete the existing image if it exists
                $path = 'assets/uploads/post/' . $post->image;
                if (File::exists($path)) {
                    File::delete($path); // Delete the old image
                }

                // Save the new image
                $file = $request->file('image');
                $filename = time() . '.' . $file->getClientOriginalExtension();
                $file->move(public_path('assets/uploads/post/'), $filename);
                $post->image = $filename; // Update image field in the brand
            }
            $post->save();

            return response()->json(['message' => 'Post updated successfully', 'data' => $post], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Delete a post by ID
    public function destroy($id)
    {
        $post = Post::find($id);
        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        $path = 'assets/uploads/posts/' . $post->image;
        if (File::exists($path)) {
            File::delete($path);
        }

        $post->delete();
        return response()->json(['message' => 'Post deleted successfully'], 200);
    }
}
