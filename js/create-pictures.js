import {similarObjects} from './data.js';

const imgUpload = document.querySelector('.img-upload');
const picture = document.querySelector('#picture').content.querySelector('.picture');

const similarPictures = document.createDocumentFragment();

similarObjects.forEach((el) => {
  const pictureClone = picture.cloneNode(true);
  pictureClone.querySelector('.picture__img').src = el.url;
  pictureClone.querySelector('.picture__comments').textContent = el.comments.length;
  pictureClone.querySelector('.picture__likes').textContent = el.likes;
  similarPictures.appendChild(pictureClone);
});

imgUpload.appendChild(similarPictures);
