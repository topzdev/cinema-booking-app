<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class TheaterSeat extends Model
{
    use HasFactory;

    protected $fillable = [
        'x',
        'y',
        'name',
        'theater_id',
        'seat_type_id',
    ];

    public function theaters(): BelongsTo
    {
        return $this->belongsTo(Theater::class);
    }

    public function seat_type(): HasOne
    {
        return $this->hasOne(SeatType::class, 'id', 'seat_type_id');
    }
}
