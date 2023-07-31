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
    const sum = sk1 + sk2;
    console.log(`${sk1} + ${sk2} ===`, sum);
    return sum;
  }
  subtraction(sk1, sk2) {
    const sub = sk1 - sk2;
    console.log(`${sk1} - ${sk2} ===`, sub);
    return sub;
  }
  multiplication(sk1, sk2) {
    const multi = sk1 * sk2;
    console.log(`${sk1} * ${sk2} ===`, multi);
    return multi;
  }
  division(sk1, sk2) {
    if (sk2 === 0) {
      return console.error("no division from zero!!!");
    } else {
      const div = sk1 / sk2;
      console.log(`${sk1} / ${sk2} ===`, div);
      return div;
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
