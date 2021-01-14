<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {
        return DB::table('users')->paginate(10);
    }

    public function show($id)
    {
        $user = DB::table('users')->where('id', $id)->first();
        return new UserResource($user);
    }

    public function update(Request $request, $id)
    {

    }

    public function destroy($id)
    {
        User::destroy($id);

        return redirect('/api/users');
    }

    public function updateProfile(Request $request)
    {
        $user = Auth::user();
        $user->update($request->only('first_name', 'last_name', 'nickname', 'email'));

        return redirect('api/user');
    }
}
