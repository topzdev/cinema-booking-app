<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\RatedType;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            UserSeeder::class,
            TheaterTypeSeeder::class,
            SeatTypeSeeder::class,
            RatedTypeSeerder::class,
            CinemaSeeder::class,
            TheaterSeeder::class,
            TheaterSeatSeeder::class,
        ]);
    }
}
