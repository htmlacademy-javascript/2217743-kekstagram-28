import {similarObjects} from './data.js';

let imgUpload = document.querySelector('.img-upload');
let picture = document.querySelector('#picture').content.querySelector('.picture');

const similarPictures = document.createDocumentFragment();

similarObjects.forEach((el) => {
  let pictureClone = picture.cloneNode(true);
  pictureClone.querySelector('.picture__img').src = el.url;
  pictureClone.querySelector('.picture__comments').textContent = el.comments.length;
  pictureClone.querySelector('.picture__likes').textContent = el.likes;
  similarPictures.appendChild(pictureClone);
})

imgUpload.appendChild(similarPictures);
