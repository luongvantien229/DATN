<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    //
    // Thêm bình luận sản phẩm
    public function store(Request $request, $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $product_id = $product->id;
        $comment = Comment::create([
            'user_id' => Auth::id(),
            'product_id' => $product_id,
            'message' => $request->message,
        ]);

        return response()->json($comment, 201);
    }

    // Lấy danh sách bình luận của sản phẩm
    public function index($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $product_id = $product->id;
        $comments = Comment::where('product_id', $product_id)->with('user')->get();
        return response()->json($comments, 200);
    }

    // Xóa bình luận (Admin hoặc người dùng đã đăng)
    public function destroy($id)
    {
        $comment = Comment::find($id);

        if (!$comment || ($comment->user_id != Auth::id() && !Auth::user()->role_id('1,3'))) {
            return response()->json(['message' => 'Unauthorized or comment not found'], 403);
        }

        $comment->delete();
        return response()->json(['message' => 'Comment deleted'], 200);
    }
}
