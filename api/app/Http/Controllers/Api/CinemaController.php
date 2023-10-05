<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cinema;
use Illuminate\Http\Request;

class CinemaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $page = $request->input('page', 1);
        $perPage = $request->input('per_page', 5);
        $q = $request->input('q', '');

        return Cinema::where(function ($query) use ($q) {
            $query->orWhere('name', 'ILIKE', "%$q%")
                ->orWhere('description', 'ILIKE', "%$q%")
                ->orWhere('address', 'ILIKE', "%$q%");
        })->paginate($perPage, ['*'], 'page', $page);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'string|nullable|max:255',
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
            'description' => 'string|nullable|max:255',
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
