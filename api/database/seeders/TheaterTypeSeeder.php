<?php

namespace Database\Seeders;

use App\Models\TheaterType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TheaterTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TheaterType::insert([
            [
                "title" => "2d",
                "description" => "2d Format"
            ],
            [
                "title" => "3d",
                "description" => "3d Format"
            ],
            [
                "title" => "IMAX",
                "description" => "IMAX Format"
            ],
            [
                "title" => "Doly Atmost",
                "description" => "IMAX Format"
            ]
        ]);
    }
}
