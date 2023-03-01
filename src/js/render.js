export const countryInfo = document.querySelector('.country-info');
export const countryList = document.querySelector('.country-list');

export function markupCountry(country) {
  const markup = country
    .map(
      ({ flags, name, capital, population, languages }) => ` <ul class="card">
   <li>
     <img src="${flags.svg}" width="250px" />
     <h1> ${name.official}</h1>
   </li>
   <li>
     <h2>Capital: ${capital}</h2>
   </li>
   <li>
     <h2>Population: ${population}</h2>
   </li>
   <li>
     <h2>Languages: ${Object.values(languages)}</h2>
   </li>
 </ul>`
    )
    .join('');
  countryInfo.insertAdjacentHTML('beforeend', markup);
}
export function markupCountries(countries) {
  countryList.insertAdjacentHTML(
    'beforeend',
    countries
      .map(
        country =>
          `<li class="card"><img src="${country.flags.svg}"width="30"> ${country.name.official}</li>`
      )
      .join('')
  );
}
export function clearContainers() {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}
