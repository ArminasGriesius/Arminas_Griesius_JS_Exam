/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
"use strict";
console.log("script.js file was loaded");

const ENDPOINT = "cars.json";

const els = {
  output: document.getElementById("output"),
};

let mainPostArr = [];

async function getUsers() {
  try {
    const resp = await fetch(ENDPOINT);
    const users = await resp.json();
    mainPostArr = users;
    console.log("mainPostArr ===", mainPostArr);
    render();
  } catch (error) {
    console.error("ivyko klaida:", error);
  }
}
getUsers();

function render() {
  const htmlElArr = mainPostArr.map((obj) => makeOnePostEl(obj));
  els.output.append(...htmlElArr);
}

function makeOnePostEl(obj) {
  const ulEl = document.createElement("ul");
  ulEl.classList.add("carList");
  const h2El = document.createElement("h2");
  h2El.textContent = obj.brand;
  ulEl.append(h2El);

  obj.models.forEach((model) => {
    const liEl = document.createElement("li");
    liEl.textContent = model;
    ulEl.append(liEl);
  });

  return ulEl;
}
