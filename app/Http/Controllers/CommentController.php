<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function show($id)
    {
        return Comment::with('user')->where('id', $id)->first();
    }

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

    public function update(Request $request, $id)
    {
        $comment = Comment::with('user')->where('id', $id)->first();

        $comment->text = $request->get('text');

        $comment->update();

        return $comment;
    }

    public function destroy($id)
    {
        Comment::destroy($id);

        return null;
    }
}
