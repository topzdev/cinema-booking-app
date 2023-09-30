<?php

use App\Http\Controllers\CinemaController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\RatedTypeController;
use App\Http\Controllers\SeatTypeController;
use App\Http\Controllers\TheaterController;
use App\Http\Controllers\TheaterSeatController;
use App\Http\Controllers\TheaterTypeController;
use App\Models\RatedType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('cinema', CinemaController::class);
Route::resource('theater', TheaterController::class);
Route::resource('theater-type', TheaterTypeController::class);
Route::resource('seat-type', SeatTypeController::class);
Route::resource('theater-seat', TheaterSeatController::class);
Route::resource('rated-type', RatedTypeController::class);
Route::resource('image', ImageController::class);
Route::resource('movie', MovieController::class);
