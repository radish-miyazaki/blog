<?php

namespace App\Http\Controllers;

use App\Blog;
use App\Http\Resources\BlogResource;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::orderBy('created_at', 'desc')
            ->where(function ($query) {
                if ($search = request('keyword')) {
                    $query->where('title', 'LIKE', "%{$search}%")
                        ->orWhere('body', 'LIKE', "%{$search}%");
                }
            })
            ->paginate(10);

        return BlogResource::collection($blogs);
    }

    public function show($id)
    {
        $blog = Blog::with('user', 'comments.user')->where('id', $id)->first();

        return new BlogResource($blog);
    }

    public function store(Request $request)
    {
        $blog = new Blog;

        $blog->title = $request->title;
        $blog->body = $request->body;
        $blog->user_id = $request->user_id;

        $blog->save();

        return redirect('api/blogs');
    }

    public function update(Request $request, $id)
    {
        $blog = Blog::with('user')->where('id', $id)->first();

        $blog->title = $request->title;
        $blog->body = $request->body;

        $blog->update();

        return redirect('api/blogs');
    }

    public function destroy($id)
    {
        Blog::destroy($id);

        return redirect('api/blogs');
    }
}
