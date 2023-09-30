<?php

namespace Database\Seeders;

use App\Models\RatedType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RatedTypeSeerder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RatedType::insert([
            [
                "name" => "Rated PG"
            ],
            [
                "name" => "Rated G"
            ],
            [
                "name" => "Rated SPG"
            ]
        ]);
    }
}
