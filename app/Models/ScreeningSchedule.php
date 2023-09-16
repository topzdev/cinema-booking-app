<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScreeningSchedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'theater_id',
        'movie_id',
        'date'
    ];
}
