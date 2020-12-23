<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Comment;
use Illuminate\Support\Facades\DB;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'text' => $faker->text(100),
        'user_id' => DB::table('users')->inRandomOrder()->first()->id,
        'blog_id' => DB::table('blogs')->inRandomOrder()->first()->id,
    ];
});
