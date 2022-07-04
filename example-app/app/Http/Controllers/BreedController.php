<?php

namespace App\Http\Controllers;

use App\Models\Breed;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class BreedController extends Controller
{
    public function index()
    {
        $json = Breed::all();
        return response($json, 200);
    }
}
