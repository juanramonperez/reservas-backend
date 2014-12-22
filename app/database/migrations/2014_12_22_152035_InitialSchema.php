<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class InitialSchema extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('personas', function($table)
		{
			$table->increments('id');
			$table->string('email')->unique();
			$table->string('photo');
			$table->string('first_name');
			$table->string('last_name');
			$table->string('position');
			$table->timestamps();
		});

		Schema::create('puestos', function($table)
		{
			$table->increments('id');
			$table->string('name');
			$table->timestamps();
		});

		Schema::create('reservas', function($table)
		{
			$table->increments('id');
			$table->integer('persona_id')->unsigned();			
			$table->integer('puesto_id')->unsigned();
			$table->timestamp('start_date');
			$table->timestamp('end_date')->nullable();		
			$table->timestamps();

			$table->foreign('puesto_id')
				  ->references('id')->on('puestos')
				  ->onDelete('cascade');
			$table->foreign('persona_id')
				  ->references('id')->on('personas')
				  ->onDelete('cascade');				  
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
        Schema::table('reservas', function(Blueprint $table) {
            $table->dropForeign('personas_persona_id_foreign');
        });
        Schema::table('reservas', function(Blueprint $table) {
            $table->dropForeign('puestos_puesto_id_foreign');
        });                     		
		Schema::drop('reservas');
		Schema::drop('puestos');
		Schema::drop('personas');
	}

}
