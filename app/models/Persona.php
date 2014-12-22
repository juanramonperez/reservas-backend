<?php

/**
 * Class related to Lists
 */

class Persona extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'personas';

	/**
	 * Reservas relationship
	 */
    public function puestos()
    {
        return $this->belongsToMany('Puesto', 'reservas', 'persona_id', 'puesto_id');
    }
}