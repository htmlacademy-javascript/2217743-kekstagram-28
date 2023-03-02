import {similarObjects} from './data.js';

const bigPicture = document.querySelector('.big-picture');
const likesCount = document.querySelector('.likes-count');
const bigPictureImg = document.querySelector('.big-picture__img img');
const commentsCount = document.querySelector('.comments-count');
const cancelBtn = document.querySelector('.big-picture__cancel');
const pictures = document.querySelectorAll('.picture');
const description = document.querySelector('.social__caption');
const socialComments = document.querySelector('.social__comments');
const body = document.querySelector('body');

pictures.forEach((el, index) => {
  el
    .addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.add('modal-open');
      document.querySelector('.social__comment-count').classList.add('hidden');
      document.querySelector('.comments-loader').classList.add('hidden');
      socialComments.innerHTML = '';
      createBigPicture(index);
    });
});

function createBigPicture(index) {
  bigPicture.classList.remove('hidden');
  bigPictureImg.src = similarObjects[index].url;
  likesCount.textContent = String(similarObjects[index].likes);
  commentsCount.textContent = String(similarObjects[index].comments.length);
  description.textContent = similarObjects[index].description;
  createComments(index).forEach((el) => socialComments.appendChild(el));
}

function createComments(index) {
  const commentArray = [];

  for (let i = 0; i < similarObjects[index].comments.length; i++) {
    const commentBlock = document.createElement('li');
    const commentText = document.createElement('p');
    const image = document.createElement('img');

    commentBlock.classList.add('social__comment');

    image.classList.add('social__picture');
    image.src = similarObjects[index].comments[i].avatar;
    image.alt = similarObjects[index].comments[i].name;
    image.width = 35;
    image.height = 35;

    commentText.classList.add('social__text');
    commentText.textContent = similarObjects[index].comments[i].message;
    commentBlock.appendChild(image);
    commentBlock.appendChild(commentText);
    commentArray.push(commentBlock);
  }

  return commentArray;
}

cancelBtn.addEventListener('click',
  () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  });

body.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
  }
});
