<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'title',
        'rated_id',
        'poster_id',
        'cover_id',
        'tmdb_id',
        'screen_time',
        'description',
        'trailer_yt_id',
    ];

    public function ratedType(): HasOne
    {
        return $this->hasOne(RatedType::class);
    }

    public function poster(): HasOne
    {
        return $this->hasOne(Photo::class, $localKey = 'poster_id');
    }

    public function cover(): HasOne
    {
        return $this->hasOne(Photo::class, $localKey = 'cover_id');
    }
}
