import animals, { useAnimals } from "./data";
import React from "react";
import ReactDOM from "react-dom";
// import { useAnimals } from "./data";
import cars from "./practice";



//Destructuring Arrays
console.log(animals);
const [cat, dog] = animals; //destructuring
//var cat = animals[0]; //or
console.log(cat);

const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

// Destructuring Objects
const { name, sound } = cat;
cosole.log(sound)
animal[0].sound

const { name: catName, sound: catSound } = cat; //name is changed to catName & sound is changed to catsound
console.log(catSound) 
const { name = "Fluffy", sound = "Purr" } = cat; //if there's no key/value for "name" in the database u can add it here
console.log (name)

const {feedingRequirements: {food, water} } = cat;
console.log(food);


const [animalName, makeSound] = useAnimals
console.log(animalName);
console.log(makeSound());


// CHALLENGE: uncomment the code below and see the car stats rendered

const [honda, tesla] = cars;

// const { speedStats: { topSpeed: hondaTopSpeed } } = honda;
const { speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondazeroToSixty } } = honda;
// const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;
const { speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslazeroToSixty } } = tesla;


const { coloursByPopularity: [hondaTopColour] } = honda;
const { coloursByPopularity: [teslaTopColour] } = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
