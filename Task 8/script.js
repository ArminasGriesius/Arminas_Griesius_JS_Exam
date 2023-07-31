/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

"use strict";
console.log("script.js file was loaded");
class Calculator {
  sum(sk1, sk2) {
    return console.log(`${sk1} + ${sk2} ===`, sk1 + sk2);
  }
  subtraction(sk1, sk2) {
    return console.log(`${sk1} - ${sk2} ===`, sk1 - sk2);
  }
  multiplication(sk1, sk2) {
    return console.log(`${sk1} * ${sk2} ===`, sk1 * sk2);
  }
  division(sk1, sk2) {
    if (sk2 === 0) {
      return console.error("no division from zero!!!");
    } else {
      return console.log(`${sk1} / ${sk2} ===`, sk1 / sk2);
    }
  }
}

const letsCalc = new Calculator();

letsCalc.sum(2, 3);

letsCalc.subtraction(2, 3);

letsCalc.multiplication(2, 3);

letsCalc.division(2, 3);

letsCalc.division(2, 0);

letsCalc.division(0, 2);

letsCalc.division(24, 2);
