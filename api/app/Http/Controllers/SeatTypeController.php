<?php

namespace App\Http\Controllers;

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
