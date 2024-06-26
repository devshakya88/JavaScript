'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)} million people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      } (${Object.values(data.currencies)[0].symbol})</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
        <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            } (${Object.values(data.currencies)[0].symbol})</p>
          </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('iceland');
getCountryData('usa');
getCountryData('germany');
*/

//Callback Hell
/*
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)} million people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      } (${Object.values(data.currencies)[0].symbol})</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  //AJAX call Country
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    //Render Country
    renderCountry(data);

    //Get Neighbour Country(2)
    const [neighbour] = data.borders?.[0];
    console.log(neighbour);

    if (!neighbour) return;
    //AJAX call Country
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/name/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);

      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('portugal');
*/

//Promise and Fetch API

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

/*
const getJSON = function (url, errorMsg = 'something went wrong') {
  getJSON();
  fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(`${err}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
*/

// console.log('Test Start');
// setTimeout(() => {
//   console.log('0 Sec Timer');
// }, 0);

// Promise.resolve('Resolved Promise 1').then(res => console.log(res));

// Promise.resolve('Resolved Promise 2').then(res => {
//   for (let i = 0; i < 10000; i++) {
//     console.log(res);
//   }
// });

// console.log('Test End');

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery Draw is Happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win 💰');
    } else {
      reject(new Error('You Lost😭'));
    }
  });
});

lotteryPromise
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 Seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 Second'));
*/

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition()
//   .then(pos => {
//     console.log(pos);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const whereAmI = function () {
//   getPosition().then(pos => {
//     console.log(pos.coords);
//   });
// };

//Async ans Await

// const wherrAmI = async function (country) {
//   const response = await fetch(
//     `https://restcountries.com/v3.1/name/${country}`
//   );
//   const data = await response.json();
//   console.log(data);
//   renderCountry(data[0]);
// };

// wherrAmI('Portugal');
// console.log('First');
/*
const fetchCountry = async function (country) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response.ok) {
      throw new Error('Problem getting Fetching country');
    }
    const data = await response.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (error) {
    console.error('Error to Fetch Country');
    renderError(`Something Went Wrong`);
  }
};

btn.addEventListener('click', function (e) {
  e.preventDefault();
  fetchCountry('');
});

*/

/*
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const get3Countries = async function (con1, con2, con3) {
  try {
    const [data1] = await getJSON(
      `https://restcountries.com/v3.1/name/${con1}`
    );
    const [data2] = await getJSON(
      `https://restcountries.com/v3.1/name/${con2}`
    );
    const [data3] = await getJSON(
      `https://restcountries.com/v3.1/name/${con3}`
    );

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${con1}`),
      getJSON(`https://restcountries.com/v3.1/name/${con2}`),
      getJSON(`https://restcountries.com/v3.1/name/${con3}`),
    ]);

    console.log(data.map(d => d[0].capital));

    console.log(data1.capital, data2.capital, data3.capital);
  } catch (err) {
    console.log(err);
  }
};

get3Countries('portugal', 'usa', 'canada');
*/

const URL = `https://restcountries.com/v3.1/all
`;

const getCountry = async function () {
  const response = await fetch(URL);
  console.log(response);
  const data = await response.json();
  console.log(data);
};

getCountry();
