<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\ScheduleTime;
use Illuminate\Http\Request;
use Mavinoo\Batch\Batch;
use function array_map;
use function var_dump;

class ScheduleTimeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ScheduleTime::paginate(5);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): bool
    {
        $fields = $request->validate([
            'schedule_id' => 'required',
            'items' => 'required|array|min:1',
            'items.*.time' => 'required|date_format:H:i'
        ]);


        $items = array_map(function ($item) use ($fields) {
            return [
                ...$item,
                "schedule_id" => $fields['schedule_id']
            ];
        }, $fields['items']);

        return ScheduleTime::insert($items);
    }

    /**
     * Display the specified resource.
     */
    public function show(ScheduleTime $time)
    {
        return $time;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $scheduleTime = new ScheduleTime();
        $fields = $request->validate([
            'schedule_id' => 'required|numeric',
            'items' => 'required|array|min:1',
            'items.*.time' => 'required|date_format:H:i',
            'items.*.id' => 'required|numeric'
        ]);

        return \Batch::update(new ScheduleTime(), $fields['items'], 'id');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ScheduleTime $scheduleTime)
    {
        return $scheduleTime->delete();
    }
}
