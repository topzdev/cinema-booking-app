<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\RatedType;
use Illuminate\Http\Request;

class RatedTypeController extends Controller
{
    public function index()
    {
        return RatedType::all();
    }
}
