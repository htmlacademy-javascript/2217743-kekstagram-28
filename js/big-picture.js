import {similarObjects} from './data.js';

const bigPictureNode = document.querySelector('.big-picture');
const likesCountNode = document.querySelector('.likes-count');
const bigPictureImgNode = document.querySelector('.big-picture__img img');
const cancelBtnNode = document.querySelector('.big-picture__cancel');
const picturesNode = document.querySelectorAll('.picture');
const descriptionNode = document.querySelector('.social__caption');
const socialCommentsNode = document.querySelector('.social__comments');
const bodyNode = document.querySelector('body');
const commentsLoaderBtn = document.querySelector('.comments-loader');
const socialCommentsCountNode = document.querySelector('.social__comment-count');
const IMG_SIZE = 35;

picturesNode.forEach((el, index) => {
  el
    .addEventListener('click', (e) => {
      e.preventDefault();
      bodyNode.classList.add('modal-open');
      socialCommentsNode.innerHTML = '';
      createBigPicture(index);
    });
});

function createBigPicture(index) {
  bigPictureNode.classList.remove('hidden');
  bigPictureImgNode.src = similarObjects[index].url;
  likesCountNode.textContent = String(similarObjects[index].likes);
  descriptionNode.textContent = similarObjects[index].description;
  commentsCounter(index);
  socialCommentsCountNode.textContent = `${document.querySelectorAll('.social__comment:not(.hidden)').length} из
  ${similarObjects[index].comments.length} комментариев`;
}

function commentsCounter(i) {
  if (similarObjects[i].comments.length <= 5) {
    commentsLoaderBtn.classList.add('hidden');
  } else {
    commentsLoaderBtn.classList.remove('hidden');
  }
  createComments(i).forEach((el, index) => {
    if (index < 5) {
      socialCommentsNode.appendChild(el);
    } else {
      el.classList.add('hidden');
      socialCommentsNode.appendChild(el);
    }
  });
}

commentsLoaderBtn.addEventListener('click', () => {
  let count = 0;
  const commentsCountArray = socialCommentsNode.querySelectorAll('.hidden');
  if (count < commentsCountArray.length) {
    count += 5;
  }
  commentsCountArray.forEach((el, index) => {
    if (index < count) {
      el.classList.remove('hidden');
    }
  });
  socialCommentsCountNode.textContent = `${checkCommentsLength(true)} из
  ${checkCommentsLength(false)} комментариев`;
  if (commentsCountArray.length < 6) {
    commentsLoaderBtn.classList.add('hidden');
  }
});

function checkCommentsLength(excludeHidden) {
  let commentsArray = [];
  if (excludeHidden){
    commentsArray = socialCommentsNode.querySelectorAll('.social__comment:not(.hidden)');
  } else {
    commentsArray = socialCommentsNode.querySelectorAll('.social__comment');
  }
  return commentsArray.length;
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
