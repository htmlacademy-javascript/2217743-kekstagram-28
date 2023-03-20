import {similarObjects} from './api.js';
import {bodyNode, createBigPicture, socialCommentsNode} from './big-picture.js';

const picturesContainerNode = document.querySelector('.pictures');
const pictureNode = document.querySelector('#picture').content.querySelector('.picture');
const similarPicturesNode = document.createDocumentFragment();
export const createPictures = (array) => {
  const picturesNode = document.querySelectorAll('.picture');
  picturesNode.forEach((pic) => {
    picturesContainerNode.removeChild(pic);
  });

  array.forEach((el) => {
    const pictureClone = pictureNode.cloneNode(true);
    pictureClone.querySelector('.picture__img').src = el.url;
    pictureClone.querySelector('.picture__comments').textContent = el.comments.length;
    pictureClone.querySelector('.picture__likes').textContent = el.likes;
    pictureClone
      .addEventListener('click', (e) => {
        e.preventDefault();
        bodyNode.classList.add('modal-open');
        socialCommentsNode.innerHTML = '';
        createBigPicture(el);
      });
    similarPicturesNode.appendChild(pictureClone);
  });
  return picturesContainerNode.appendChild(similarPicturesNode);
};

createPictures(similarObjects);
