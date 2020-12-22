<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Blog;
use Illuminate\Support\Facades\DB;
use Faker\Generator as Faker;

$factory->define(Blog::class, function (Faker $faker) {
    return[
        'title' => $faker->text(50),
        'body' => $faker->text(200),
        'user_id' => DB::table('users')->inRandomOrder()->first()->id,
    ];
});
