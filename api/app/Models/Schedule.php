<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'theater_id',
        'movie_id',
    ];

    public function schedule_time()
    {
        return $this->hasMany(ScheduleTime::class);
    }
}
