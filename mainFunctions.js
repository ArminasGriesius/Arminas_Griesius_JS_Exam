//1.Parašykite funkciją, kuri atspausdina visus žmones eilutėmis
export function getEilutes(arr) {
  arr.map((arrObj) => {
    console.log("arr ===", arrObj);
  });
}

//2. Parašykite funkciją, kuri atspausdina visų žmonių vardus ir pavardes, atskirtus brūkšneliu, pvz.: Serbentautas-Bordiūras
export function getDashedName(arr) {
  const dashedName = arr.map((arrObj) => {
    return arrObj.name + "-" + arrObj.surname;
  });
  return dashedName;
}

//3. Parašykite funkciją, kuri atspausdina visų žmonių vardus ir pavardes
//bei santuokos statusą, tokiu būdu Jonas Bikas: Vedęs Jonas Bikas:
//Nevedęs Samantas Kultaitytė: Ištekėjusi Samantas Kultaitytė: Neištekėjusi
export function getStatusAndName(arr) {
  const statusAndName = arr.map((arrObj) => {
    let status =
      arrObj.sex === "male"
        ? arrObj.married
          ? "Vedes"
          : "Nevedes"
        : arrObj.married
        ? "Istekejusi"
        : "Netekejusi";
    return status + " " + arrObj.name + " " + arrObj.surname;
  });
  return statusAndName;
}

//5 Sukurkite  funkciją, kuri grąžintų objektą su lytimi ir uždirbamu pinigų kiekiu
export function getSexAndIncome(arr) {
  const sexAndIncome = arr.map((arrObj) => ({
    sex: arrObj.sex,
    income: arrObj.income,
  }));
  return sexAndIncome;
}
//6 Sukurkite funkciją, kuri grąžintų objektą su vardu, pavarde ir lytimi. Tuomet panaudoje ją, grazinkite masyvą,

export function getObjFullnameAndSex(arr) {
  const objFullnameAndSex = arr.map((arrObj) => ({
    name: arrObj.name,
    surname: arrObj.surname,
    sex: arrObj.sex,
  }));
  return objFullnameAndSex;
}

//1. Naudojant Array.prototype.forEach atspausdinti visus vyrus.
export function getAllMales(arr) {
  arr.forEach((arrObj) => {
    if (arrObj.sex === "male") {
      console.log("Male ===", arrObj);
    }
  });
}

//2. Naudojant Array.prototype.forEach atspausdinti visas moteris jaunesnes nei 35 metai.
export function getFemalesUnder35(arr) {
  arr.forEach((arrObj) => {
    if (arrObj.sex === "female" && arrObj.age < 35) {
      console.log("female ===", arrObj);
    }
  });
}

//3 Naudojant Array.prototype.forEach atspausdinti visus žmones kurie turi mašinas.
export function getHasCar(arr) {
  arr.forEach((arrObj) => {
    if (arrObj.hasCar === true) {
      console.log("Person has a car ===", arrObj);
    }
  });
}

//4 Naudojant Array.prototype.forEach atspausdinti visus susituokusius žmones.
export function getMarriedPeople(arr) {
  arr.forEach((arrObj) => {
    if (arrObj.married === true) {
      console.log("Married ===", arrObj);
    }
  });
}

//5 Naudojant Array.prototype.forEach atspausdinti visų vairuojančių žmonių amziu.
export function getDriversAge1(arr) {
  arr.forEach((arrObj) => {
    if (arrObj.hasCar === true) {
      console.log(`Driver ${arrObj.name} is ${arrObj.age}`);
    }
  });
}
export function getDriversAge2(arr) {
  const age = [];
  arr.forEach((arrObj) => {
    if (arrObj.hasCar === true) {
      age.push(arrObj.age);
    }
  });
  return age;
}

//6 Naudojant Array.prototype.forEach ir globalius kintamuosius, suskaičiuoti vairuojančių moterų ir vyrų kiekius, bei juos atspausdinti.
export function getDrivingWomenAndMen(arr) {
  let womenCount = 0;
  let menCount = 0;
  arr.forEach((arrObj) => {
    if (arrObj.sex === "male" && arrObj.hasCar === true) {
      menCount++;
      console.log("Male driver -", arrObj);
    } else if (arrObj.sex === "female" && arrObj.hasCar === true) {
      womenCount++;
      console.log("Female driver -", arrObj);
    }
  });
  console.log("womenCount ===", womenCount);
  console.log("menCount ===", menCount);
}

//7 Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva su objektais, kurie turės savybes sex ir income

export function getSexAndIncomeArr(arr) {
  const sexAndIncome = arr.map((arrObj) => ({
    sex: arrObj.sex,
    income: arrObj.income,
  }));
  return sexAndIncome;
}

//8 Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva pakeičiant savybę 'income' į 'salary'
export function getIncomeToSalary1(arr) {
  const incomeToSalary = arr.map((arrObj) => ({
    name: arrObj.name,
    surname: arrObj.surname,
    sex: arrObj.sex,
    age: arrObj.age,
    salary: arrObj.income,
    married: arrObj.married,
    hasCar: arrObj.hasCar,
  }));
  return incomeToSalary;
}

export function getIncomeToSalary2(arr) {
  const incomeToSalary = arr.map((arrObj) => ({
    ...arrObj,
    salary: arrObj.income,
    income: undefined,
  }));
  return incomeToSalary;
}

export function getIncomeToSalary3(arr) {
  const incomeToSalary = arr.map(({ income, ...arrObj }) => ({
    ...arrObj,
    salary: income,
  }));
  return incomeToSalary;
}

//9 Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva kuriame nebūtų lyties, vardo ir pavardės
export function getSmallerArr(arr) {
  const smallerArr = arr.map(({ sex, name, surname, ...arrObj }) => ({
    ...arrObj,
  }));
  return smallerArr;
}

//10 Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyvą
//kur savybės name ir surname būtų pakeistos viena savybe - fullname
export function getArrWithFullname(arr) {
  const arrWithFullname = arr.map(({ name, surname, ...arrObj }) => ({
    ...arrObj,
    fullname: name + " " + surname,
  }));
  return arrWithFullname;
}
