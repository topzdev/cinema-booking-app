<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\Movie;
use App\Http\Requests\StoreMovieRequest;
use App\Http\Requests\UpdateMovieRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\File;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Movie::with(['cover', 'poster', 'rated_type'])->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $imageUploader = new ImageUploadController();

        $fields = $request->validate([
            'title' => 'required|string|max:255',
            'rated_type_id' => 'required|numeric',
            'poster' => 'required|image|max:2048',
            'cover' => 'required|image|max:2048',
            'tmdb_id' => 'required|string',
            'runtime' => 'required|numeric',
            'description' => 'string|max:255',
            'trailer_yt_id' => 'string',
        ]);

        if (!empty($request->file('poster'))) {
            $poster = $request->file('poster')->getRealPath();
            $poster = $imageUploader->upload('poster', $poster);
            $fields['poster_id'] = $poster->id;
        }


        if (!empty($request->file('cover'))) {
            $cover = $request->file('cover')->getRealPath();
            $cover = $imageUploader->upload('cover', $cover);
            $fields['cover_id'] = $cover->id;
        }

        unset($fields['poster']);
        unset($fields['cover']);

        return Movie::create($fields);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Movie::with(['cover', 'poster', 'rated_type'])->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Movie $movie)
    {
        $imageUploader = new ImageUploadController();

        $fields = $request->validate([
            'title' => 'required|string|max:255',
            'rated_type_id' => 'required|numeric',
            'poster' => 'nullable|image|max:2048',
            'cover' => 'nullable|image|max:2048',
            'tmdb_id' => 'required|string',
            'runtime' => 'required|numeric',
            'description' => 'string|max:255',
            'trailer_yt_id' => 'string',
        ]);


        if (!empty($request->file('poster'))) {
            $poster = $request->file('poster')->getRealPath();
            $imageUploader->upload('poster', $poster, $movie->poster_id);
        }


        if (!empty($request->file('cover'))) {
            $cover = $request->file('cover')->getRealPath();
            $imageUploader->upload('cover', $cover, $movie->cover_id);
        }

        unset($fields['poster']);
        unset($fields['cover']);

        return $movie->update($fields);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        return $movie->delete();
    }
}
