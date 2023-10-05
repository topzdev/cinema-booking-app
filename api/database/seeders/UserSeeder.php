<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use function bcrypt;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::insert([
            'first_name' => 'topzdev',
            'last_name' => 'lugod',
            'password' => bcrypt('lugod'),
            'email' => 'christian@email.com'
        ]);
    }
}
