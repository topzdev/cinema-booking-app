<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingSeats extends Model
{
    use HasFactory;

    protected $fillable = [
        'seat_id',
        'booking_id'
    ];
}
