<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TheaterLayout extends Model
{
    use HasFactory;

    protected $fillable = [
        'row',
        'column',
        'theater_id'
    ];

}
