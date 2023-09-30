<?php

namespace Database\Seeders;

use App\Models\TheaterSeat;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TheaterSeatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TheaterSeat::insert([
            [
                "x" => 1,
                "y" => 2,
                "name" => "A1",
                "theater_id" => 1,
                "seat_type_id" => 1,
            ]

        ]);
    }
}
