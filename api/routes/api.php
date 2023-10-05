<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CinemaController;
use App\Http\Controllers\Api\ImageController;
use App\Http\Controllers\Api\MovieController;
use App\Http\Controllers\Api\RatedTypeController;
use App\Http\Controllers\Api\ScheduleController;
use App\Http\Controllers\Api\ScheduleTimeController;
use App\Http\Controllers\Api\SeatTypeController;
use App\Http\Controllers\Api\TheaterController;
use App\Http\Controllers\Api\TheaterSeatController;
use App\Http\Controllers\Api\TheaterTypeController;
use App\Http\Controllers\Api\UserController;
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

Route::post('/auth/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('cinema', CinemaController::class);
    Route::apiResource('theater', TheaterController::class);
    Route::apiResource('theater-type', TheaterTypeController::class);
    Route::apiResource('seat-type', SeatTypeController::class);
    Route::apiResource('theater-seat', TheaterSeatController::class);
    Route::apiResource('rated-type', RatedTypeController::class);
    Route::apiResource('image', ImageController::class);
    Route::apiResource('movie', MovieController::class);
    Route::apiResource('schedule', ScheduleController::class);
    Route::apiResource('schedule-time', ScheduleTimeController::class);
    Route::apiResource('user', UserController::class);
    Route::post('user/reset-password/{user}', [UserController::class, 'resetPassword']);
});
