<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
    */

    public function up()
    {
        Schema::create('ingatlanok', function (Blueprint $table) {

            $table->integer('id')->primary();
            $table->integer('kategoriak');
            $table->string('leiras');
            $table->date('hirdetesDatuma');
            $table->boolean('tehermentes');
            $table->integer('ar');
            $table->string('kepUrl');

            $table->foreign('kategoriak')->references('kategoriak')->on('kategoriak');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
    */

    public function down()
    {
        Schema::dropIfExists('ingatlanok');
    }

};
