<?php

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
// プロフィール情報変更
Route::post('/profile', 'UserController@updateProfile');

// ブログ
Route::get('blogs', 'BlogController@index');
Route::get('blogs/{id}', 'BlogController@show');
Route::post('blogs', 'BlogController@store');
Route::post('blogs/{id}/update', 'BlogController@update');
Route::post('blogs/{id}/destroy', 'BlogController@destroy');

// コメント
Route::get('comments/{id}', 'CommentController@show');
Route::post('comments/{id}/update', 'CommentController@update');
Route::post('comments/{id}/destroy', 'CommentController@destroy');
Route::post('blogs/{blog}/comments', 'CommentController@store');

// ダッシュボード
Route::get('/dashboard', 'DashboardController@chart');

// ユーザ
Route::get('/users', 'UserController@index');
Route::get('/users/{id}', 'UserController@show');
Route::post('/users/{id}/update', 'UserController@update');
Route::post('/users/{id}/destroy', 'UserController@destroy');
