/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

"use strict";
console.log("script.js file was loaded");

class Movie {
  constructor(argTitle, argDirector, argBudget) {
    this.title = argTitle;
    this.director = argDirector;
    this.budget = argBudget;
  }
  wasExpensive() {
    if (this.budget >= 100000000) {
      console.log("Expensive movie indeed");
      return console.log(true);
    } else {
      console.log("Cheap movie");
      return console.log(false);
    }
  }
}

const cheapMovie = new Movie("Rocky", "John G. Avildsen", 960000);
console.log("cheapMovie ===", cheapMovie);
cheapMovie.wasExpensive();

const expensiveMovie = new Movie(
  "Harry Potter and the Half-Blood Prince",
  "David Yates",
  250000000
);
console.log("cheapMovie ===", expensiveMovie);
expensiveMovie.wasExpensive();
