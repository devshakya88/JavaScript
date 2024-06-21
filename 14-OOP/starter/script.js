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

//Coding Challenge - #1
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going to ${this.speed}Km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going to ${this.speed}Km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Meredes', 95);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/

//Classes

/*
class employee {
  constructor(firstName) {
    this.firstName = firstName;
  }
  message() {
    console.log('Hello From Message Function');
  }
}

class manager extends employee {
  constructor(firstName, departmentName) {
    super(firstName);
    this.departmentName = departmentName;
  }
  message() {
    console.log('Hello.......');
  }
  info() {
    super.message();
    console.log(
      this.firstName + ' is manager of Department' + this.departmentName
    );
  }
}

class admin extends manager {}

// const manager1 = new manager('Devender', 'Web Development');
const admin1 = new admin('Dev', 'Web');
console.log(manager1.message());
console.log(manager1.info());
*/
/*
class emp {
  #firstName = '';
  constructor(firstName) {
    this.#firstName = firstName;
  }
  #getName() {
    console.log(this.#firstName);
  }
}
let emp1 = new emp('Devender');
console.log(emp1.firstName);
console.log(emp1.getName());
*/

//Class Expression

// const PersonCl = class {};

//Class Declaration

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes('')) {
      this.fullName = name;
    } else {
      alert(`${name} is not a full n ame!`);
    }
  }
}

const jessica = new Person('Jessica', 1995);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === Person.prototype);

jessica.greet();

//Getters and Setters
/*
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/
