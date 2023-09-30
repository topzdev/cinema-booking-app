<?php

namespace App\Http\Controllers;

use App\Models\RatedType;
use Illuminate\Http\Request;

class RatedTypeController extends Controller
{
    public function index()
    {
        return RatedType::all();
    }
}
