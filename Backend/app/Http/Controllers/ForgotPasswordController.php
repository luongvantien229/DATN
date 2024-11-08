<?php

namespace App\Http\Controllers;

use App\Mail\ForgotPasswordMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;

use Illuminate\Validation\ValidationException;
class ForgotPasswordController extends Controller
{
    // public function sendResetLinkEmail(Request $request)
    // {
    //     $request->validate(['email' => 'required|email']);

    //     $status = Password::sendResetLink(
    //         $request->only('email')
    //     );

    //     return $status === Password::RESET_LINK_SENT
    //         ? response()->json(['message' => 'Reset link sent to your email'])
    //         : response()->json(['error' => 'Unable to send reset link'], 400);
    // }
    public function sendResetLinkEmail(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status === Password::RESET_LINK_SENT) {
            $token = Password::createToken($request->user());
            Mail::to($request->email)->send(new ForgotPasswordMail($token, $request->email));
            return response()->json(['message' => 'Reset link sent to your email']);
        }

        return response()->json(['error' => 'Unable to send reset link'], 400);
    }

    public function showResetForm($token)
    {
        return view('auth.passwords.reset', ['token' => $token]);
    }

    public function reset(Request $request)
    {
        // Xác thực dữ liệu đầu vào
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required|confirmed|min:6',
            'password2' => 'required|confirmed|min:6|same:password',
            'token' => 'required',
        ]);

        // Đặt lại mật khẩu
        $response = Password::reset(
            $request->only('email', 'password', 'token'),
            function ($user, $password) {
                $user->password = bcrypt($password);
                $user->save();
            }
        );

        // Kiểm tra kết quả
        if ($response == Password::PASSWORD_RESET) {
            return redirect()->route('login')->with('status', trans($response));
        }

        throw ValidationException::withMessages(['email' => trans($response)]);
    }
}
