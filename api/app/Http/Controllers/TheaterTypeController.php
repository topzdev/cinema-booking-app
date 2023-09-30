<?php

namespace App\Http\Controllers;

use App\Models\TheaterType;
use Illuminate\Http\Request;

class TheaterTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return TheaterType::all();
    }
}
