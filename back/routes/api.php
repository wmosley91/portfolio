<?php

use Illuminate\Http\Request;

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
Route::post('storeUser', 'UserController@store');
Route::post('signIn', 'UserController@signIn');
Route::post('getUser', 'UserController@get');

Route::any('{path?}', 'MainController@index')->where("path", ".+");
