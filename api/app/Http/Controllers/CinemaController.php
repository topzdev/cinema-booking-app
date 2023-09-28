<?php

namespace App\Http\Controllers;

use App\Models\Cinema;
use App\Http\Requests\StoreCinemaRequest;
use App\Http\Requests\UpdateCinemaRequest;
use Illuminate\Http\Request;

class CinemaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Cinema::all();
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'string|max:255',
            'address' => 'required|string|max:255',
        ]);

        return Cinema::create($fields);
    }

    /**
     * Display the specified resource.
     */
    public function show(Cinema $cinema)
    {
        return $cinema;
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cinema $cinema)
    {
        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'string|max:255',
            'address' => 'required|string|max:255',
        ]);

        return $cinema->update($fields);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cinema $cinema)
    {
        return $cinema->delete();
    }
}
