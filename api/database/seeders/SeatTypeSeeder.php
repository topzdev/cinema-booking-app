<?php

namespace Database\Seeders;

use App\Models\SeatType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SeatTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SeatType::insert([
            [
                "name" => "Traditional Seat"
            ],
            [
                "name" => "Wheelchair"
            ],
            [
                "name" => "Wheelchair companion"
            ]
        ]);
    }
}
