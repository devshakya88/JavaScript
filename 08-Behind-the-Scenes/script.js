"use strict";

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = "Shakya";
//       const str = `Oh, and You are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // add(2, 3);
//   }
//   printAge();
//   return age;
// }

// const firstName = "Devender";
// calcAge(1991);

//Hoisting

// console.log(me);
// console.log(job);
// console.log(year);

// var me = "Devender";
// let job = "Developer";
// const year = 1991;

// console.log(addDecl(1, 2));
// console.log(addExp(1, 2));
// console.log(addArrow(1, 2));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExp = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// //Example

// if (!numProducts) {
//   deleteShopingCart();
// }

// var numProducts = 10;

// function deleteShopingCart() {
//   console.log("All Products deleted");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(this);

// const calAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calAge(1991);

// const calAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calAge(1980);

// const dev = {
//   year: 1991,
//   calAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// dev.calAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calAge = dev.calAge;
// matilda.calAge();

// const f = dev.calAge;
// console.log(f);

// const jonas = {
//   firstName: "Devender",
//   year: 1991,
//   calAge: function () {
//     // console.log(sthis);
//     console.log(2037 - this.year);

//     const self = this;
//     const isMillenial = function () {
//       console.log(self);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
// };

// great: () => console.log(`Hey ${this.firstName}`);

// jonas.great();
// console.log(this.firstName);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "Devender",
//   age: 30,
// };

// const friend = me;

// friend.age = 27;
// console.log("ME", me);
// console.log("friend:", friend);

//Primitive types
// let lastName = "Williams";
// let oldlastName = lastName;
// lastName = "Davis";

// console.log("lastName->", lastName);
// console.log("oldlastName->", oldlastName);

// //Reference type
// const jessica = {
//   firstName: "jessica",
//   lastName: "Williams",
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";

// console.log("Before Marriage", jessica);
// console.log("After Marriage", marriedJessica);

//Copying Onbject

const jessica2 = {
  firstName: "jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob", "Devender"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log("Before Marriage", jessica2);
console.log("After Marriage", jessicaCopy);
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("john");
console.log("Before Marriage", jessica2);
console.log("After Marriage", jessicaCopy);
