import React from 'react';
import howManyParks from './parks/howManyParks';

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}
/*
OR
import React from "react";
import parksNumber from "./parks/howManyParks"; Renaming export

function ColoradoStateParks() {
  parksNumber(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

OR 

import React from "react";
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

export default function ColoradoStateParks; Accepted syntax

Named Exports!!!

import { trees, wildlife } from "./parks/RockyMountain";

console.log(trees);
// => "Aspen and Pine"

wildlife();
// => "Elk, Bighorn Sheep, Moose"

OR
export const trees = "Aspen and Pine";

export function wildlife() {
  console.log("Elk, Bighorn Sheep, Moose");
}

function elevation() {
  console.log("9583 ft");
}

Import!!!

import * from syntax imports all of the variables that have been exported from a given module

import * as RMFunctions from "./parks/RockyMountain";

console.log(RMFunctions.trees);
// => "Aspen and Pine"

RMFunctions.wildlife();
// => "Elk, Bighorn Sheep, Moose"

RMFunctions.elevation();
// => Attempted import error

 import { variable } from syntax allows us to access a specific variable by name, and use that variable within our file.

 import { trees, wildlife } from "./parks/RockyMountain";

console.log(trees);
// > "Aspen and Pine"

wildlife();
// > "Elk, Bighorn Sheep, Moose"

OR RENAMED
import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";

console.log(parkTrees);
// > "Aspen and Pine"

parkWildlife();
// > "Elk, Bighorn Sheep, Moose"

*/
