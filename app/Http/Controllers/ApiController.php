<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Faker\Generator as Faker;
use Faker\Factory;

class ApiController extends Controller
{
  public function getTeam () {
    $team = [];
    /** @var Faker $faker */
    $faker = Factory::create();
    for ($i = 0; $i < 8; $i++) {
      $team[] = [
        "name" => $faker->name,
        "age" => $faker->numberBetween(20, 70),
        "image" => "https://i.pravatar.cc/200?u=" . $faker->email,
        "bio" => $faker->realText(50)
      ];
    }

    return response()->json(['team' => $team]);
  }
}
