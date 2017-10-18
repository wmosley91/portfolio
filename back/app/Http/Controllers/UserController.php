<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Response;
use Purifier;
use Hash;
use Auth;
use JWTAuth;
use App\User;

class UserController extends Controller
{
    public function __construct()
    {
      $this->middleware('jwt.auth', ['only' => ['get']]);
    }

    public function store(Request $request)
    {
      $rules = [
        'name' => 'required',
        'email' => 'required',
        'password' => 'required'
      ];

      $validator = Validator::make(Purifier::clean($request->all()), $rules);
      if($validator->fails())
      {
        return Response::json(['error' => 'name/email/password required']);
      }

      $user = new User;
      $user->name = $request->input('name');
      $user->email = $request->input('email');
      $user->roleID = 1;
      $user->password = Hash::make($request->input('password'));
      $user->save();

      return Response::json([
        'success' => 'user entered into db',
        'user' => $user
      ]);
    }

    public function signIn(Request $request)
    {
      $rules = [
        'email' => 'required',
        'password' => 'required'
      ];

      $validator = Validator::make(Purifier::clean($request->all()), $rules);
      if($validator->fails())
      {
        return Response::json(['error' => 'email/password required']);
      }

      $email = $request->input('email');
      $password = $request->input('password');
      $credentials = compact('email', 'password');
      $token = JWTAuth::attempt($credentials);

      if($token === false)
      {
        return Response::json(['error' => 'invalid credentials']);
      }

      return Response::json([
        'success' => 'successfully signed in',
        'token' => $token
      ]);
    }

    public function get()
    {
      $id = Auth::id();
      $user = User::find($id);

      return Response::json(['success' => 'user located']);
    }
}
