<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        $fields = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $credentials = \request(['email', 'password']);

        if (!auth()->attempt($credentials)) {
            return response()->json([
                'message' => 'The given credential was invalid',
                'errors' => [
                    'password' => [
                        'Invalid credentials'
                    ]
                ]
            ], 422);
        }

        $user = User::where('email', $fields['email'])->first();
        $authToken = $user->createToken('auth-token')->plainTextToken;

        $user['access_token'] = $authToken;
        return response()->json($user);
    }
}
