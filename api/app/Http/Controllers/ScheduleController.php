<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Schedule::with('schedule_time')->get();
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'theater_id' => 'required|numeric|exists:theaters,id',
            'movie_id' => 'required|numeric|exists:movies,id',
            'date' => 'required|date',
//            'times' => 'required|array:time',
//            'times.time' => 'required|date_format:H:i'
        ]);

        return Schedule::create($fields);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Schedule::with('schedule_time')->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Schedule $schedule)
    {
        $fields = $request->validate([
            'theater_id' => 'required|numeric|exists:theaters,id',
            'movie_id' => 'required|numeric|exists:movies,id',
            'date' => 'required|date',
        ]);

        return $schedule->update($fields);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Schedule $schedule)
    {
        return $schedule->delete();
    }
}
