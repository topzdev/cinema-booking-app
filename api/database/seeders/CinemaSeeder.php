<?php

namespace Database\Seeders;

use App\Models\Cinema;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CinemaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Cinema::insert([
            [
                "name" => "SM San Lazaro",
                "address" => "Felix Huertas Sampaloc Manila",
                "description" => "SM San Lazaro Cinema located in manila"
            ], [
                "name" => "SM Manila",
                "address" => "Felix Huertas Sampaloc Manila",
                "description" => "SM Manila Cinema located in manila"
            ],
        ]);
    }
}
