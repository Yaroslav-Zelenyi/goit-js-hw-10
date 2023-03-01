const BASE_URL = 'https://restcountries.com/v3.1/';

export function fetchCountry(name) {
  return fetch(
    `${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    console.log(response);

    return response.json();
  });
}
