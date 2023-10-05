<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TheaterSeat;
use Illuminate\Http\Request;

class TheaterSeatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return TheaterSeat::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'x' => 'required|numeric',
            'y' => 'required|numeric',
            'name' => 'required|string|max:255',
            'theater_id' => 'required|numeric|exists:theaters,id',
            'seat_type_id' => 'required|numeric|exists:seat_types,id',
        ]);

        return TheaterSeat::create($fields);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return TheaterSeat::with('seat_type')->find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TheaterSeat $theaterSeat): bool
    {
        $fields = $request->validate([
            'x' => 'required|numeric',
            'y' => 'required|numeric',
            'name' => 'required|string|max:255',
            'theater_id' => 'required|numeric|exists:theaters,id',
            'seat_type_id' => 'required|numeric|exists:seat_types,id',
        ]);

        return $theaterSeat->update($fields);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TheaterSeat $theaterSeat): ?bool
    {
        return $theaterSeat->delete();
    }
}
