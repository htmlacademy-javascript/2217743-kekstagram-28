import {imgEditOverlayNode, defaultOverlayProperties} from './validate-fields.js';
const successMessageNode = document.querySelector('#success').content
  .querySelector('.success');
const errorMessageNode = document.querySelector('#error').content
  .querySelector('.error');
const bodyNode = document.querySelector('body');

const urlData = 'https://28.javascript.pages.academy/kekstagram/data';
const urlPost = 'https://28.javascript.pages.academy/kekstagram';

export const API = {
  async send(data) {
    const response = await fetch(urlPost, {
      method: 'POST',
      credentials: 'same-origin',
      body: data,
    });

    if (!response.ok) {
      bodyNode.appendChild(errorMessageNode);
      errorMessageNode.querySelector('button').onclick = () => {
        bodyNode.removeChild(bodyNode.querySelector('.error'));
      };
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
    return await fetch(urlData).then((response) => response.json());
  },
};

export const similarObjects = await API.get()
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));

