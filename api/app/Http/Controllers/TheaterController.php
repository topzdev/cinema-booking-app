<?php

namespace App\Http\Controllers;

use App\Models\Theater;
use App\Http\Requests\StoreTheaterRequest;
use App\Http\Requests\UpdateTheaterRequest;
use Illuminate\Http\Request;

class TheaterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Theater::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'string|max:255',
            'cinema_id' => 'required|numeric|exists:cinemas,id',
            'theater_type_id' => 'required|numeric|exists:theater_types,id',
            'row' => 'required|numeric',
            'column' => 'required|numeric'
        ]);
        return Theater::create($fields);
    }

    /**
     * Display the specified resource.
     */
    public function show(Theater $theater)
    {
        return Theater::with(['cinema', 'theater_type'])->find($theater);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTheaterRequest $request, Theater $theater)
    {

        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'string|max:255',
            'cinema_id' => 'required|numeric|exists:cinemas,id',
            'theater_type_id' => 'required|numeric|exists:theater_types,id',
            'row' => 'required|numeric',
            'column' => 'required|numeric'
        ]);

        return $theater->update($fields);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Theater $theater)
    {
        return $theater->delete();
    }
}
