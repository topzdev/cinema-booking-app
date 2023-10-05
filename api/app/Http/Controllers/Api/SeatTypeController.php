<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SeatType;
use Illuminate\Http\Request;

class SeatTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return SeatType::all();
    }
}
