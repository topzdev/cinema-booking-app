<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('theater_seats', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('x');
            $table->integer('y');
            $table->string('name');

            $table->foreignId('theater_id')->constrained();
            $table->foreignId('seat_type_id')->constrained();

            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('theater_seats');
    }
};
