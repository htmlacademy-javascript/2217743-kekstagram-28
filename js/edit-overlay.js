const uploadFileNode = document.querySelector('#upload-file');
const imgEditOverlayNode = document.querySelector('.img-upload__overlay');
const closeEditBtnNode = document.querySelector('.img-upload__cancel');
const bodyNode = document.querySelector('body');
const uploadFormNode = document.querySelector('.img-upload__form');
const hashtagNode = uploadFormNode.querySelector('.text__hashtags');
const commentNode = uploadFormNode.querySelector('.text__description');

const pristine = new Pristine(uploadFormNode, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'error__text'
});

const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;

const validateComment = (value) => value.length < 140;

function hasDuplicates(array) {
  return (new Set(array)).size === array.length;
}

const validateHashtag = (value) => {
  let IS_VALID = true;
  const array = value.trim().split(' ');
  array.forEach((el) => {
    if (!hashtag.test(el)) {
      IS_VALID = false;
      return IS_VALID;
    }
  });
  const IS_DUPLICATE = hasDuplicates(array);
  return IS_DUPLICATE === IS_VALID && array.length < 6;
};

const hashtagErrorText = (value) => {
  const hashtagsArray = value.split(' ');
  if (hashtagsArray.length > 5) {
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

const escapeClick = (e) => {
  if (e.key === 'Escape') {
    imgEditOverlayNode.classList.add('hidden');
    bodyNode.classList.remove('modal-open');
  }
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

uploadFormNode.addEventListener('submit', (e) => {
  e.preventDefault();
  pristine.validate();
});

uploadFileNode.addEventListener('change', () => {
  imgEditOverlayNode.classList.remove('hidden');
  bodyNode.classList.add('modal-open');
  uploadFileNode.value = null;
});

closeEditBtnNode.addEventListener('click', () => {
  imgEditOverlayNode.classList.add('hidden');
  bodyNode.classList.remove('modal-open');
});

bodyNode.addEventListener('keydown', escapeClick);
