// console.log("Devender");
// console.log(23);

// let firstName = "Shakya";
// console.log(firstName);

// let PI = 3.14;
// console.log(PI);

// let javaScript = true;
// console.log(typeof javaScript);

// javaScript = "YES!";
// console.log(typeof javaScript);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1993;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 34;

// const birthYear = 1990;
// // birthYear = 1990;

// var job = "programmer";
// job = "Developer";

// lastName = "Shakya";
// console.log(lastName);

// const now = 2024;
// const ageDevender = now - 1996;
// const ageDeepti = now - 1997;
// console.log(ageDevender, ageDeepti);

// console.log(ageDevender / 2, ageDeepti * 2, 2 ** 3);

// const firstName = "Devender";
// const lastName = "Shakya";

// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10;
// x++;
// x--;
// x *= 2;
// console.log(x);

// let ageDev = 30;
// let ageDeepti = 20;

// console.log(ageDev > ageDeepti);
// console.log(ageDev < ageDeepti);
// console.log(ageDev >= ageDeepti);
// console.log(ageDev <= ageDeepti);
// console.log(ageDev != ageDeepti);

// const isFullAge = ageDeepti >= 19;
// console.log(isFullAge);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageDev + ageDeepti) / 2;
// console.log(averageAge);

//String and Templete Literal

// const firstName = "Devender";
// const job = "content Developer";
// const birthYear = 1996;
// const year = 2037;

// const devender =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(devender);

// const devNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
// console.log(devNew);

// console.log(`Just a regular String...`);

// console.log(`String with \n\
// multiple \n\
// lines
// `);

//conditional Statement

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Dev can Start Driving licence 🙌");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Dev is too Young. Wait another ${yearsLeft} years 😒`);
// }

// const birthYear = 1998;

// let century;
// if (birthYear < 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

//Type Conversion

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //Type coercion

// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// //Truthy and Falsi Value

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("john"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Don't Spent it all ;");
// } else {
//   console.log("You Should get a Job");
// }

// let height = 13;
// if (height) {
//   console.log("YAY ! height is Defined");
// } else {
//   console.log("height is unDefined");
// }

//Equality Operator

// const age = 18;
// if (age === 18) console.log("You Just became an adult");

// const fav = Number(prompt("What your Favourite numner"));
// console.log(fav);
// console.log(typeof fav);

// if (fav === 23) {
//   console.log("Cool ! 23 is amazing Number");
// } else if (fav === 7) {
//   console.log("7 is also a Cool Number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (fav !== 23) {
//   console.log("Why not 23");
// }

//Logical Operator

// // const hasDriverLicense = true;
// const hasGoodVision = false;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);
// console.log(!hasGoodVision);

// const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Devender is able to Drive");
// } else {
//   console.log("Someone else Should Drive");
// }

// const isTired = true;
// // console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("Devender is able to Drive");
// } else {
//   console.log("Someone else should Drive....🚗");
// }

// Switch Statement

// const day = "tuesday";

// switch (day) {
//   case "monday":
//     console.log("Plan my Course Structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory Videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write Code Example");
//     break;
//   case "Friday":
//     console.log("Record Videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the Weekend");
//     break;
//   default:
//     console.log("Not a Valid Day");
// }

// if (day === "monday") {
//   console.log("Plan my Course Structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory Videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write Code Example");
// } else if (day === "friday") {
//   console.log("Record Videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the Weekend");
// } else {
//   console.log("Not a Valid Day");
// }

// if (23 > 10) {
//   const str = "23 is bigger";
// }

// console.log(`I am `)

// const age = 23;
// age >= 18
//   ? console.log("I like to Drink Wine🍷")
//   : console.log("I like to Drink Water🚰");

// const drink = age >= 18 ? "Wine🍷" : "Water🚰";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "Wine";
// } else {
//   drink2 = "Water";
// }

// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "Wine" : "Water"}`);
