<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function updateProfile(Request $request)
    {
        $user = Auth::user();
        $user->update($request->only('first_name', 'last_name', 'nickname', 'email'));

        return redirect('api/user');
    }
}
