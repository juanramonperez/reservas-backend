<?php

/**
 * Class related to Lists
 */

class Puesto extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'puestos';

	/**
	 * Reservas relationship
	 */
    public function personas()
    {
        return $this->belongsToMany('Persona', 'reservas', 'puesto_id', 'persona_id');
    }	
}