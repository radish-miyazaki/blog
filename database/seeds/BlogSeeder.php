<?php

use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // タグデータ登録
        factory(\App\Tag::class, 10)->create();

        // 登録したタグの全データを取得
        $tags = \App\Tag::all();

        factory(\App\Blog::class, 40)
            ->create()
            ->each(function ($blog) use ($tags) {
                // 1つのblogデータにつき、1~3個のtagデータを紐付け
                $blog->tags()->attach(
                    $tags->random(rand(1, 3))->pluck('id')->toArray()
                );
            });
    }
}
