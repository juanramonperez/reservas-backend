<?php

class PersonasController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$items = Input::get('items') ? Input::get('items') : 10;
		// If keys
		if(Input::get('keys')) {
			$personas = Persona::where(
							function ($query) {
    							$query->where('first_name', 'like', '%' . Input::get('keys') . '%')
          					      	  ->orWhere('last_name', 'like', '%' . Input::get('keys') . '%');
          					}
          				)->get();
		} else {
			$personas = Persona::all();
		}	
		return Response::json($personas);
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$persona = new Persona;
		$persona->first_name = Input::get('first_name');
		$persona->last_name = Input::get('last_name');
		$persona->email = Input::get('email');
		$persona->position = Input::get('position');
		$persona->photo = Input::get('photo');
		$persona->save();
		return Response::json(array('ok'));
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$persona = Persona::find($id);
		return Response::json($persona);
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$persona = Persona::find($id);
		if($persona){
			$persona->first_name = Input::get('first_name');
			$persona->last_name = Input::get('last_name');
			$persona->email = Input::get('email');
			$persona->position = Input::get('position');
			$persona->photo = Input::get('photo');
			$persona->save();
			return Response::json(array('ok'));
		}
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$persona = Persona::find($id);
		$persona->delete();
		return Response::json(array('ok'));
	}
}
