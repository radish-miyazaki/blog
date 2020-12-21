<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RegisterApiTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function should_新しいユーザを作成して返却する()
    {
        $data = [
            'first_name' => 'test',
            'last_name' => 'example',
            'nickname' => 'nick',
            'email' => 'test@example.com',
            'password' => 'password',
            'password_confirm' => 'password'
        ];

        $response = $this->json('POST', route('register'), $data);

        $user = User::first();

        $this->assertEquals($data['first_name'], $user->first_name);

        $response
            ->assertStatus(201)
            ->assertJson(['first_name' => $user->first_name]);
    }

}
