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
        Schema::create('theater_layouts', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('row');
            $table->integer('column');
            $table->foreignId('theater_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('theater_layouts');
    }
};
