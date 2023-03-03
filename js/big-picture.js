import {similarObjects} from './data.js';

const bigPictureNode = document.querySelector('.big-picture');
const likesCountNode = document.querySelector('.likes-count');
const bigPictureImgNode = document.querySelector('.big-picture__img img');
const commentsCountNode = document.querySelector('.comments-count');
const cancelBtnNode = document.querySelector('.big-picture__cancel');
const picturesNode = document.querySelectorAll('.picture');
const descriptionNode = document.querySelector('.social__caption');
const socialCommentsNode = document.querySelector('.social__comments');
const bodyNode = document.querySelector('body');
const IMG_SIZE = 35;

picturesNode.forEach((el, index) => {
  el
    .addEventListener('click', (e) => {
      e.preventDefault();
      bodyNode.classList.add('modal-open');
      document.querySelector('.social__comment-count').classList.add('hidden');
      document.querySelector('.comments-loader').classList.add('hidden');
      socialCommentsNode.innerHTML = '';
      createBigPicture(index);
    });
});

function createBigPicture(index) {
  bigPictureNode.classList.remove('hidden');
  bigPictureImgNode.src = similarObjects[index].url;
  likesCountNode.textContent = String(similarObjects[index].likes);
  commentsCountNode.textContent = String(similarObjects[index].comments.length);
  descriptionNode.textContent = similarObjects[index].description;
  createComments(index).forEach((el) => socialCommentsNode.appendChild(el));
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
    image.width = IMG_SIZE;
    image.height = IMG_SIZE;

    commentText.classList.add('social__text');
    commentText.textContent = similarObjects[index].comments[i].message;
    commentBlock.appendChild(image);
    commentBlock.appendChild(commentText);
    commentArray.push(commentBlock);
  }

  return commentArray;
}

cancelBtnNode.addEventListener('click',
  () => {
    bigPictureNode.classList.add('hidden');
    bodyNode.classList.remove('modal-open');
  });

bodyNode.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    bodyNode.classList.remove('modal-open');
    bigPictureNode.classList.add('hidden');
  }
});
