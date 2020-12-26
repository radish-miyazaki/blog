<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function store(Blog $blog, Request $request)
    {
        $comment = new Comment();
        $comment->text = $request->get('text');
        $comment->user_id = Auth::user()->id;
        $blog->comments()->save($comment);

        // user_idリレーションをロードするためにコメントを取得し直す
        $new_comment = Comment::with('user')
            ->where('id', $comment->id)->first();

        return response($new_comment, 201);
    }
}
