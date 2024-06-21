'use strict';

/*
const Person = function (firstName, birthYear, cityName) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.cityName = cityName;
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991, 'Faridabad');
// console.log(jonas);

const devender = new Person('Devender', 1996, 'Delhi');
// console.log(devender);
const jay = 'Jay';
// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

//Prototype
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
*/

// let person1 = {};
// console.log(person1);

// let person2 = {
//   firstName: 'Devender',
// };

// console.log(person2.hasOwnProperty('firstName'));
// console.log(person2.hasOwnProperty('age'));

// const Person = function (firstName) {
//   this.firstName = firstName;
// };

// function Person(firstName) {
//   this.firstName = firstName;
// }
// const person3 = new Person('Dev');
// console.log(person3);

/*
function Person(first, last, age) {
  this.first = first;
  this.last = last;
  this.age = age;
}

Person.prototype.fullName = function () {
  console.log(`My name is ${this.first} ${this.last}`);
};

// Person.prototype.cityName = 'Faridabad';

const person1 = new Person('Devender', 'Shakya', 27);
const person2 = new Person('Karishma', 'Kumari', 26);
console.log(person1);
console.log(person2);
*/

//Prototype Chaining
/*
function Creature(lifeSpan) {
  this.lifeSpan = lifeSpan;
}

Creature.prototype.breathe = function () {
  console.log('Breathing');
};

const creature1 = new Creature(100);

console.log(creature1);

function Person(first, last, age) {
  this.first = first;
  this.last = last;
  this.age = age;
}

Person.prototype.fullName = function () {
  console.log(`My name is ${this.first} ${this.last}`);
};

Person.prototype.__proto__ = Object.create(Creature.prototype);

const person1 = new Person('Devender', 'Shakya', 27);
const person2 = new Person('Karishma', 'Kumari', 26);
console.log(person1);
console.log(person2.fullName());
*/
