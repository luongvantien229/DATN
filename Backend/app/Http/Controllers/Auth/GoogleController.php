<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Social;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use Session;
use Str;

class GoogleController extends Controller
{
    // Login google admin

    public function login_google()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }

    public function callback_google()
    {
        $users = Socialite::driver('google')->stateless()->user();
        // return $users->id;

        $authUser = $this->findOrCreateUser($users, 'google');
        $account_name = User::where('id', $authUser->user_id)->first();
        Session::put('name', $account_name->name);
        Session::put('id', $account_name->id);
        $token = JWTAuth::fromUser($account_name);
        // return response()->json([
        //     'user' => $account_name,
        //     'token' => $token,
        //     'message' =>'đăng nhập Admin bằng google thành công'
        // ]);
        return redirect()->to("http://localhost:3000/?token={$token}");
    }

    public function findOrCreateUser($users, $provider)
    {
        $authUser = Social::where('provider_user_id', $users->id)->first();
        if ($authUser) {
            return $authUser;
        }
        $than = new Social([
            'provider_user_id' => $users->id,
            'provider' => strtoupper($provider),
        ]);

        $orang = User::where('email', $users->email)->first();
        if (!$orang) {
            $orang = User::create([
                'name' => $users->name,
                'email' => $users->email,
                'password' =>'',
                'phone' => '0000000000',
                'lock' => 0,
                'role_id' => 1,
                'google_id' => $users->id
            ]);
        }
        $than->login()->associate($orang);
        $than->save();

        $account_name = User::where('id', $than->user_id)->first();
        Session::put('name', $account_name->name);
        Session::put('id', $account_name->id);
        return $than;
    }




    // Login google customer
    public function login_customer_google()
    {
        config(['services.google.redirect' => env('GOOGLE_CLIENT_URL')]);
        return Socialite::driver('google')->redirect();
    }

    public function callback_customer_google()
    {
        config(['services.google.redirect' => env('GOOGLE_CLIENT_URL')]);
        try {
            $user = Socialite::driver('google')->user();
            $finduser = User::where('google_id', $user->id)->first();

            if ($finduser) {
                Auth::login($finduser);

            } else {
                $newUser = User::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'google_id' => $user->id,
                    'password' => ''
                ]);

                Auth::login($newUser);
                $token = Auth::user()->createToken('authToken')->accessToken;
                return response()->json([
                    'user' => Auth::user(),
                    'token' => $token,
                ], 200);
            }
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }
}
