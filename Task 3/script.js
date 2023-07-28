/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama div elemente su id "output".
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
"use strict";
console.log("script.js file was loaded");

const ENDPOINT = "https://api.github.com/users";

const els = {
  btnEl: document.getElementById("btn"),
  message: document.getElementById("message"),
  output: document.getElementById("output"),
};

let mainPostArr = [];

els.btnEl.addEventListener("click", getUsers);

async function getUsers() {
  try {
    const resp = await fetch(ENDPOINT);
    const users = await resp.json();
    mainPostArr = users;
    render();
  } catch (error) {
    console.error("ivyko klaida:", error);
  }
}

function render() {
  els.output.innerHTML = "";
  const htmlElArr = mainPostArr.map((obj) => makeOnePostEl(obj));
  els.output.append(...htmlElArr);
}

function makeOnePostEl(obj) {
  const ulEl = document.createElement("ul");
  ulEl.classList.add("userList");
  const liEl = document.createElement("li");
  const h2El = document.createElement("h2");
  h2El.textContent = obj.login;
  const avatarEl = document.createElement("img");
  avatarEl.src = obj.avatar_url;
  avatarEl.alt = obj.login;
  avatarEl.classList.add("avatar");
  liEl.append(h2El, avatarEl);
  ulEl.append(liEl);
  return ulEl;
}
