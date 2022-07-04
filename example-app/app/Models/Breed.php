<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Breed extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'origin',
        'temperament',
        'life_span',
        'wikipedia_url',
        'weight',
        'height',
        'coat',
        'image',
    ];
}
