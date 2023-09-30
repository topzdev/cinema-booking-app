<?php

namespace Database\Seeders;

use App\Models\Theater;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TheaterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Theater::insert([
            [
                "name" => "Cinema 1",
                "cinema_id" => 1,
                "theater_type_id" => 2,
                "row" => 10,
                "column" => 10,
                "description" => "Cinema 1 Description"
            ],
            [
                "name" => "Cinema 2",
                "cinema_id" => 2,
                "theater_type_id" => 2,
                "row" => 10,
                "column" => 10,
                "description" => "Cinema 1 Description"
            ]
        ]);
    }
}
