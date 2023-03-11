import {API} from './api.js';
const uploadFileNode = document.querySelector('#upload-file');
const imgEditOverlayNode = document.querySelector('.img-upload__overlay');
const closeEditBtnNode = document.querySelector('.img-upload__cancel');
const bodyNode = document.querySelector('body');
const uploadFormNode = document.querySelector('.img-upload__form');
const hashtagNode = uploadFormNode.querySelector('.text__hashtags');
const commentNode = uploadFormNode.querySelector('.text__description');
const imgPreviewNode = document.querySelector('.img-upload__preview');
const scaleFieldNode = document.querySelector('.scale__control--value');
const imgNode = imgPreviewNode.querySelector('img');
const effectLevelNode = document.querySelector('.effect-level');


const pristine = new Pristine(uploadFormNode, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'error__text'
});

const validateNumbers = {
  MAX_VALUE_LENGTH: 140,
  MAX_HASHTAG_LENGTH: 5,
  MAX_ARRAY_LENGTH: 6,
};

const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;

const validateComment = (value) => value.length < validateNumbers.MAX_VALUE_LENGTH;

const hasDuplicates = (array) => (new Set(array)).size === array.length;

const validateHashtag = (value) => {
  let IS_VALID = true;
  const array = value.trim().split(' ');
  array.forEach((el) => {
    if (!HASHTAG.test(el)) {
      IS_VALID = false;
      return IS_VALID;
    }
  });
  const IS_DUPLICATE = hasDuplicates(array);
  return IS_DUPLICATE === IS_VALID && array.length < validateNumbers.MAX_ARRAY_LENGTH || array[0] === '';
};

const hashtagErrorText = (value) => {
  const hashtagsArray = value.trim().split(' ');
  if (hashtagsArray.length > validateNumbers.MAX_HASHTAG_LENGTH) {
    return 'Количество хэштэгов не должно быть больше 5';
  }
  if (!hasDuplicates(hashtagsArray)) {
    return 'Хэштэги не должны повторяться';
  }
  return 'Неправильно задан хэштэг';
};

pristine.addValidator(uploadFormNode
  .querySelector('.text__description'), validateComment, 'Количество символов должно быть меньше 140');

pristine.addValidator(uploadFormNode
  .querySelector('.text__hashtags'), validateHashtag, hashtagErrorText);

const defaultOverlayProperties = () => {
  imgNode.className = '';
  imgNode.classList.add('none');
  imgNode.style.filter = '';
  uploadFormNode.reset();
};

const escapeClick = (e) => {
  if (e.key === 'Escape') {
    imgEditOverlayNode.classList.add('hidden');
    bodyNode.classList.remove('modal-open');
    if (bodyNode.querySelector('.error, .success')) {
      bodyNode.removeChild(bodyNode.querySelector('.success, .error'))
    }
  }
  defaultOverlayProperties();
};


//Убираем событие на Escape при фокусе
hashtagNode.addEventListener('focus', () => {
  bodyNode.removeEventListener('keydown', escapeClick);
});
hashtagNode.addEventListener('blur', () => {
  bodyNode.addEventListener('keydown', escapeClick);
});
commentNode.addEventListener('focus', () => {
  bodyNode.removeEventListener('keydown', escapeClick);
});
commentNode.addEventListener('blur', () => {
  bodyNode.addEventListener('keydown', escapeClick);
});

const sendFile = (fileName) => {
  uploadFormNode.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.set('filename', fileName);
    await API.send(formData).then(() => uploadFileNode.value = null);
    pristine.validate();
  }
}

uploadFileNode.addEventListener('change', (e) => {
  pristine.reset();
  sendFile(uploadFileNode.files[0]);
  imgEditOverlayNode.classList.remove('hidden');
  bodyNode.classList.add('modal-open');
  effectLevelNode.classList.add('hidden');
  scaleFieldNode.value = '100%';
  imgPreviewNode.style.transform = 'scale(1)';
});

closeEditBtnNode.addEventListener('click', (e) => {
  e.preventDefault();
  imgEditOverlayNode.classList.add('hidden');
  bodyNode.classList.remove('modal-open');
  defaultOverlayProperties();
});

bodyNode.addEventListener('keydown', escapeClick);

export {scaleFieldNode, imgPreviewNode, imgNode};
