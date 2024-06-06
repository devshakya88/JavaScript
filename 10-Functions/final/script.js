'use strict';
// const bookings = [];
// const createBooking = function(flightNum, numPassengers=1, price=1000*numPassengers){

//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   }
//   console.log(booking);
//   bookings.push(booking);
// }
// createBooking('LH123');
// createBooking('BA342',3,1300)
// createBooking('BA442',4);
// createBooking('LH353',undefined,4000);

/*
const flight = 'LH234';
const dev = {
  name:'Devender Shakya',
  passport:458024495
}
const checkIn = function(flightNum, passenger){
  flightNum = 'LH993';
  passenger.name = 'Mr. '+passenger.name;

  if(passenger.passport===458024495){
    alert('check in');
  }
  else{
    alert('Wrong Passport');
  }
}
// checkIn(flight, dev);
// console.log(flight);
// console.log(dev);


const newPassport = function(person){
  person.passport = 458024495;
  // person.passport = Math.trunc(Math.random()*100000000);
}
newPassport(dev);
checkIn(flight, dev);
*/

/*
const oneWord = function(str){
  return str.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function(str){
  const [first,...others] = str.split(' ');
  return [first.toUpperCase(),...others].join(' ');
}

//Higher=order function

const transformer = function(str,fn){
  console.log(`original string: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function(){
  console.log('👋')
}

document.addEventListener('click',high5);
['Deveder','Deepti','Monu'].forEach(high5);
*/

// const greet = function(greeting){
//   return function(name){
//     console.log(`${greeting} ${name}`);
//   }
// }

// const greeter = greet('Hey')
// greeter('Devender');
// greeter('Deepti');

// greet('Hello')('Dev');

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// greet('Hi')('Devender');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.booking.push({ flight: `${this.iataCode}${flightNum} `, name });
  },
};

// lufthansa.book(239, 'Devender Shakya');
// lufthansa.book(635, 'Deepti Shakya');
// // console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;
// book(23, 'Dev');

// book.call(eurowings,23,'Dev Shakya')
// console.log(eurowings);
// book.call(lufthansa,239,'Mary Cooper');
// console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  booking: [],
};

// book.call(swiss, 548, 'Mary Cooper');
// console.log(swiss);

//Apply Method

const flightData = [583, 'Karishma'];
// book.apply(swiss,flightData);
// console.log(swiss);

// book.call(swiss,...flightData);
// console.log(swiss);

//Bind Method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(34,'Rahul Shakya');

// const bookEW23 = book.bind(eurowings,23)
// bookEW23('Rahul');
// bookEW23('Devender Shakya');

// //With event Listner

// lufthansa.planes = 300;
// lufthansa.buyPlane = function(){
//   console.log(this)
//   this.planes++;
//   console.log(this.planes);
// }
// // lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));

// //

// const addTax = (rate,value)=>value+value * rate;
// console.log(addTax(0.1,200));

// const addVAT = addTax.bind(null,0.23);

// console.log(addTax(100));
// console.log(addTax(23));

// const addTaxRate = function(rate){
//   return function(value){

//   }
// }

// # Coding Challenge -1

// const poll = {
//   question: 'What is your favourite programming language?',
//   option: ['0:JavaScript', '1:Python', '2:Rust', '3:C++'],

//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     //Register answer
//     typeof answer === 'number' && answer < this.answers.length;
//     console.log(this.answers);
//   },
// };

// poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

//Imediate Invoke Function

// const runOnce = function(){
//   console.log('This Will never run again');
// }
// runOnce();

// (function(){
//   console.log('This Will never run again');
// })();

// (()=> console.log('This Will also never run again'))();

// const secureBooking = function(){
//   let passengerCount = 0;

//   return function(){
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   }
// }

// const booker = secureBooking();
// booker();
// booker();
// booker();

// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a,b);
//     }
//     y();
//   }
//   x();
// }
// z();

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
//   const h = function () {
//     const b = 777;
//     f = function () {
//       console.log(b * 2);
//     };
//   };
// };
// g();
// f();

let name = {
  firstname: 'Devender',
  lastName: 'Shakya',
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname +
      ' ' +
      this.lastName +
      ' from ' +
      hometown +
      ' state->' +
      state
  );
};

// printFullName.call(name, 'Dehradun', 'Uttarakhand');

let name2 = {
  firstname: 'Sachin',
  lastName: 'Tendulkar',
};

//Call Method
// printFullName.call(name2, 'Mumbai', 'Maharashtra');

printFullName.apply(name2, ['Mumbai', 'Maharashtra']);

let printMyName = printFullName.bind(name2, 'Mumbai', 'Maharashtra');
console.log(printFullName);
printMyName();
