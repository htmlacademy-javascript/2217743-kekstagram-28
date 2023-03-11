import {similarObjects} from './api.js';

const picturesContainerNode = document.querySelector('.pictures');
const pictureNode = document.querySelector('#picture').content.querySelector('.picture');
const similarPicturesNode = document.createDocumentFragment();
similarObjects.forEach((el) => {
  const pictureClone = pictureNode.cloneNode(true);
  pictureClone.querySelector('.picture__img').src = el.url;
  pictureClone.querySelector('.picture__comments').textContent = el.comments.length;
  pictureClone.querySelector('.picture__likes').textContent = el.likes;
  similarPicturesNode.appendChild(pictureClone);
});

picturesContainerNode.appendChild(similarPicturesNode);
