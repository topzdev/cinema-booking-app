<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('title');
            $table->string('tmdb_id');
            $table->time('duration');
            $table->string('description')->nullable();
            $table->string('trailer_yt_id')->nullable();

            $table->foreignId('rated_type_id')->constrained();
            $table->foreignId('poster_id')->constrained(table:'photos');
            $table->foreignId('cover_id')->constrained(table:'photos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};
