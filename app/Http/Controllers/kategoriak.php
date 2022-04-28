<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\kategoriak;


class kategoriakController extends Controller
{

    public function index()
    {

        return kategoriak::all();
    }
}
