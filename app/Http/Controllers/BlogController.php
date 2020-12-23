<?php

namespace App\Http\Controllers;

use App\Blog;
use App\Http\Resources\BlogResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::with('user')->paginate(10);

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

    public function destory($id)
    {
        Blog::destroy($id);

        return redirect('api/blogs');
    }
}
