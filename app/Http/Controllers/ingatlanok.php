<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ingatlanok;


class ingatlanokController extends Controller
{

    public function index()
    {

        return ingatlanok::all();
    }

    public function delete(Request $request, $id)
    {
        $article = ingatlanok::find($id);
        $article->delete();
        return ['message' => 'Törölve'];
    }
}
