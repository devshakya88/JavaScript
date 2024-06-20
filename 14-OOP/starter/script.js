'use strict';

const Person = function (firstName, birthYear, cityName) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.cityName = cityName;
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  this.userData = function () {
    console.log(
      `My name is ${this.firstName} and by age is ${calcAge()} and i live in ${
        this.cityName
      }`
    );
  };
};

const jonas = new Person('Jonas', 1991, 'Faridabad');
console.log(jonas);

const devender = new Person('Devender', 1996, 'Delhi');
console.log(devender);
const jay = 'Jay';
console.log(jonas instanceof Person);
console.log(jay instanceof Person);
