<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // Fetch all posts
    public function index()
    {
        $posts = Post::with(['users', 'category_posts'])->get();
        return response()->json(['data' => $posts], 200);
    }

    // Fetch a single post by ID
    public function show($id)
    {
        $post = Post::with(['users', 'category_posts'])->find($id);

        if (!$post) {
            return response()->json(['message' => 'Post not found!'], 404);
        }

        return response()->json(['data' => $post], 200);
    }

    // Create a new post
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'category_post_id' => 'required|exists:category_posts,id',
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $post = Post::create($validatedData);

        return response()->json(['message' => 'Post created successfully!', 'data' => $post], 201);
    }

    // Update an existing post
    public function update(Request $request, $id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['message' => 'Post not found!'], 404);
        }

        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'category_post_id' => 'required|exists:category_posts,id',
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $post->update($validatedData);

        return response()->json(['message' => 'Post updated successfully!', 'data' => $post], 200);
    }

    // Delete a post
    public function destroy($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['message' => 'Post not found!'], 404);
        }

        $post->delete();

        return response()->json(['message' => 'Post deleted successfully!'], 200);
    }
}
