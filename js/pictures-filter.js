const filterButtons = document.querySelectorAll('.img-filters__button');
import {API, similarObjects} from './api.js';
import {createPictures} from './create-pictures.js';
const discussedFilter = (array) => array
  .slice()
  .sort((prev, next) => prev.comments.length - next.comments.length)
  .reverse();

const randomFilter = (array) => {
  const ELEMENTS_COUNT = 10;
  const result = [];

  for (let i = 0; i < ELEMENTS_COUNT; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    result.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return result;
};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const swapClasses = (event, array) => {
  array.forEach((el) => {
    if (el.classList.contains('img-filters__button--active')) {
      el.classList.remove('img-filters__button--active');
    }
    event.target.classList.add('img-filters__button--active');
  });
};

const FILTERS_ID = {
  'filter-default': () => createPictures(similarObjects),
  'filter-random': async () => createPictures(randomFilter(await API.get())),
  'filter-discussed':() => createPictures(discussedFilter(similarObjects)),
};

filterButtons.forEach((button) => {
  button.onclick = debounce((e) => {
    Object.keys(FILTERS_ID).forEach((id) => {
      if (id === e.target.id) {
        debounce(FILTERS_ID[e.target.id].call());
      }
    });
    swapClasses(e, filterButtons);
  });
});
