// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperature1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temperature2 = [6, -4, -7, -1, "error", 9, 13, 7, 25, 34, 9, 5];

// const calcTempAmplitude = function (temps1, temps2) {
//   const temps = temperature1.concat(temperature2);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== "number") continue;
//     if (currTemp > max) max = currTemp;
//     if (currTemp < min) min = currTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperature1, temperature2);
// console.log(amplitude);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius:")),
  };

  console.log(measurement);
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
