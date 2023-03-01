import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { clearContainers, markupCountries, markupCountry } from './js/render';

const searchBox = document.querySelector('#search-box');
const DEBOUNCE_DELAY = 300;

searchBox.addEventListener(
  'input',
  debounce(event => {
    const capital = event.target.value.trim();
    if (capital) {
      fetchCountries(capital).then(data => {
        console.log(data);
        clearContainers();
        if (data.status === 404) {
          Notify.failure('Oops, there is no country with that name');
          return;
        }
        if (data.length > 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          return;
        }
        if (data.length === 1) {
          markupCountry(data);
          return;
        }
        markupCountries(data);
      });
    }
  }, DEBOUNCE_DELAY)
);
