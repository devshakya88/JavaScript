// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log("I am drive :D");

// const interface = "Audio";

// const private = 534;

// // Functions

// function logger() {
//   console.log("My name is Devender");
// }

// //calling/Running/Invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(3, 4);
// console.log(appleJuice);
// console.log(fruitProcessor(1, 2));

// const appleOrangeJuice = fruitProcessor(2, 5);
// console.log(appleOrangeJuice);

// const num = Number("23");

//Function Declaration

// const age1 = calcAge1(1996);
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// //Function Expression
// //Anonymous Functions

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1996);
// console.log(age1, age2);

//Arrow Function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement(1991, "jonas"));
// console.log(yearUntilRetirement(1996, "Devender"));

//

// function cutFruitsPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitsPieces(apples);
//   const orangesPieces = cutFruitsPieces(oranges);
//   const juice = `juice with ${applePieces} apples Pieces and ${orangesPieces} oranges Pieces.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = calAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has Already Retired`);
//     return -1;
//   }
//   // return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement(1991, "Devender"));
// console.log(yearUntilRetirement(1950, "Mike"));

//Array

// const friend1 = "Devender";
// const friend2 = "Deepti";
// const friend3 = "Karishma";

// const friend = ["Devender", "Karishma", "Deepti", "Monu"];
// console.log(friend);

// const years = new Array(1991, 1193, 2000, 2003);
// console.log(years);

// console.log(friend[0]);
// console.log(friend[3]);

// console.log(friend.length);

// console.log(friend[friend.length - 1]);

// friend[1] = "Baby";
// console.log(friend);

// const firstName = "Devender";
// const dev = [firstName, "Shakya", 2037 - 1996, "unmarried", friend];

// console.log(dev);

//Exercise

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1957, 2002, 2010, 2018];
// calcAge(years);

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const friend = ["Devender", "Karishma", "Deepti", "Monu"];
// //Add element
// const newLength = friend.push("Jay");
// console.log(friend);
// console.log(newLength);

// friend.unshift("john");
// console.log(friend);

//Remove Element

// friend.pop();
// const popped = friend.pop();
// console.log(popped);
// console.log(friend);

// friend.shift();
// console.log(friend);

// console.log(friend.indexOf("Deepti"));
// console.log(friend.indexOf("Deept"));

// console.log(friend.includes("Deepti"));
// console.log(friend.includes("Deept"));

// console.log(friend.includes(23));

// if (friend.includes("Deepti")) {
//   console.log("You Have a friend Called Deepti");
// }

//Object

// const devArray = {
//   firstName: "Devender",
//   lastName: "Shakya",
//   age: 2024 - 1996,
//   job: "Developer",
//   isMarried: false,
//   friend: ["Devender", "Karishma", "Deepti", "Monu"],
// };

// console.log(devArray);

// console.log(devArray.lastName);
// console.log(devArray["lastName"]);

// const nameKey = "Name";
// console.log(devArray["first" + nameKey]);
// console.log(devArray["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Devender? Choose betweem firstName, lastName, age, job, friend"
// );

// if (devArray[interestedIn]) {
//   console.log(devArray[interestedIn]);
// } else {
//   console.log(
//     "Wrong Request! Choose betweem firstName, lastName, age, job, friend "
//   );
// }

// devArray.location = "Delhi";
// devArray["twitter"] = "@devshakya";
// console.log(devArray);

// //Challenge

// console.log(
//   `${devArray.firstName} has ${devArray.friend.length} and his best friend is ${devArray.friend[1]}`
// );

// const devArray = {
//   firstName: "Devender",
//   lastName: "Shakya",
//   birthYear: 1991,
//   job: "Developer",
//   isMarried: false,
//   friend: ["Devender", "Karishma", "Deepti", "Monu"],
//   hasDriverlicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} - year old ${
//       this.job
//     }, and he has ${this.hasDriverlicense ? "a" : "no"} driver's license`;
//   },
// };

// console.log(devArray.calcAge());

// console.log(devArray.age);
// console.log(devArray.age);
// console.log(devArray.age);
// // console.log(devArray["calcAge"](1991));

// //challenge

// console.log(devArray.getSummary());

// console.log("Lifting Weight Repetition 1");

// for (let rep = 1; rep <= 100; rep++) {
//   console.log(`Lifting Weight Repetition ${rep}`);
// }

// const devArray = [
//   "Devender",
//   "Shakya",
//   2037 - 1996,
//   "Developer",
//   ["Dev", "Monu", "Deepti"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < devArray.length; i++) {
//   // console.log(devArray[i], typeof devArray[i]);

//   // types[i] = typeof devArray[i];
//   types.push(typeof devArray[i]);
// }

// // console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i <= years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// // console.log(ages);

// //Continue
// console.log("--------");
// for (let i = 0; i < devArray.length; i++) {
//   if (typeof devArray[i] !== "string") continue;
//   console.log(devArray[i], typeof devArray[i]);
// }

// //Break
// console.log("---BREAK-----");
// for (let i = 0; i < devArray.length; i++) {
//   if (typeof devArray[i] === "number") break;
//   console.log(devArray[i], typeof devArray[i]);
// }

// const devArray = [
//   "Devender",
//   "Shakya",
//   2037 - 1996,
//   "Developer",
//   ["Dev", "Monu", "Deepti"],
//   true,
// ];

// for (let i = devArray.length - 1; i >= 0; i--) {
//   console.log(i, devArray[i]);
// }

// //Nested Loop

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------Starting Exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting Weight Repetition ${rep} 🏋️`);
//   }
// }

//While Loop

// let rep = 1;

// while (rep <= 10) {
//   console.log(`Lifting Weight repetition ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a  ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log("Loop is about to end....");
  }
}
