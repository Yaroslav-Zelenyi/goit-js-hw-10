export const countryInfo = document.querySelector('.country-info');
export const countryList = document.querySelector('.country-list');

export function markupCountry(country) {
  const markup = country
    .map(
      ({ flags, name, capital, population, languages }) => ` <div class="country_card"> 
   <p>
     <img src="${flags.svg}" width="250px" />
     <h1> ${name.official}</h1>
   </p>
   <p>
     <h2>Capital: ${capital}</h2>
   </p>
   <p>
     <h2>Population: ${population}</p>
   </p>
   <p>
     <h2>Languages: ${Object.values(languages)}</h2>
   </p>
 </div>`
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
          `<li class="country_card"><img src="${country.flags.svg}"width="30"> ${country.name.official}</li>`
      )
      .join('')
  );
}
export function clearContainers() {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}
