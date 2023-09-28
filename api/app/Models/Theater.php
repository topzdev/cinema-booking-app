<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Theater extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'description',
        'cinema_id',
        'theater_type_id',
        'row',
        'column'
    ];

    public function cinema(): HasOne
    {
        return $this->hasOne(Cinema::class, 'id', 'cinema_id');
    }

    public function theater_type(): HasOne
    {
        return $this->hasOne(TheaterType::class, 'id', 'theater_type_id');
    }

    public function theaterSeats(): HasMany
    {
        return $this->hasMany(TheaterSeat::class);
    }
}
