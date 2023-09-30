<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'rated_type_id',
        'poster_id',
        'cover_id',
        'tmdb_id',
        'runtime',
        'description',
        'trailer_yt_id',
    ];

    public function rated_type(): HasOne
    {
        return $this->hasOne(RatedType::class, 'id', 'rated_type_id');
    }

    public function poster(): HasOne
    {
        return $this->hasOne(Image::class, 'id', 'poster_id');
    }

    public function cover(): HasOne
    {
        return $this->hasOne(Image::class, 'id', 'cover_id');
    }
}
