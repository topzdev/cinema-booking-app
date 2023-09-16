<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'movie_rates_type_id',
        'tmdb_id',
        'screen_time',
        'description',
        'trailer_yt_id',
    ];
}
