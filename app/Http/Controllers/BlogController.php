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
        $blog = Blog::with('user')->where('id', $id)->first();

        return new BlogResource($blog);
    }
}
