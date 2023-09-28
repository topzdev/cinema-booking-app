<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ScreeningSchedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'theater_id',
        'movied_id',
        'date'
    ];

    public function screeningSchedule(): HasMany
    {
        return $this->hasMany(ScheduleTime::class);
    }
}
