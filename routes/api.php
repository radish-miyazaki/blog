<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// ログイン
Route::post('/login', 'Auth\LoginController@login')->name('login');
// ログアウト
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');
// ユーザ登録
Route::post('/register', 'Auth\RegisterController@register')->name('register');
// ログインユーザ
Route::get('/user', function () {
    return Auth::user();
})->name('user');
// ブログ
Route::get('blogs', 'BlogController@index');
Route::get('blogs/{id}', 'BlogController@show');
Route::post('blogs', 'BlogController@store');
Route::post('blogs/{id}', 'BlogController@update');
Route::post('blogs/{id}', 'BlogController@destory');
