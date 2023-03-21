import {imgEditOverlayNode, defaultOverlayProperties} from './validate-fields.js';
const successMessageNode = document.querySelector('#success').content
  .querySelector('.success');
const errorMessageNode = document.querySelector('#error').content
  .querySelector('.error');
const bodyNode = document.querySelector('body');
const imgFiltersNode = document.querySelector('.img-filters');

const urlData = 'https://28.javascript.pages.academy/kekstagram/data';
const urlPost = 'https://28.javascript.pages.academy/kekstagram';

export const errorValidate = () => {
  bodyNode.appendChild(errorMessageNode);
  errorMessageNode.querySelector('button').onclick = () => {
    bodyNode.removeChild(bodyNode.querySelector('.error'));
  };
};

export const API = {
  async send(data) {
    const response = await fetch(urlPost, {
      method: 'POST',
      credentials: 'same-origin',
      body: data,
    });

    if (!response.ok) {
      errorValidate();
      throw new Error(`Error address ${urlPost}`);
    } else {
      bodyNode.appendChild(successMessageNode);
      successMessageNode.querySelector('button').onclick = () => {
        bodyNode.removeChild(bodyNode.querySelector('.success'));
        imgEditOverlayNode.classList.add('hidden');
        defaultOverlayProperties();
      };
    }

    await response.json();
  },
  async get() {
    const res = await fetch(urlData);
    if (res.ok) {
      imgFiltersNode.classList.remove('img-filters--inactive');
      return res.json();
    } else {
      throw new Error(`error address ${urlData}`);
    }
  },
};

// eslint-disable-next-line no-console
export const similarObjects = await API.get().catch((err) => console.log(err));

