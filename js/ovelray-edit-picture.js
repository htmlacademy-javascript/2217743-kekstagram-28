import {imgPreviewNode, scaleFieldNode, imgNode} from './validate-fields.js';

const buttonScale = {
  bigger: document.querySelector('.scale__control--bigger'),
  smaller: document.querySelector('.scale__control--smaller'),
};
const digitalValues = {
  SCALE_STEP: 25,
  MAX_SCALE: 100,
  MIN_SCALE: 25,
  PERCENT: 100,
};
const effectsKeys = {
  'effect-none': {
    class: 'none',
  },
  'effect-chrome': {
    class: 'effects__preview--chrome',
    step: 0.1,
    filter: function (value) {
      return `grayscale(${value})`;
    },
    min: 0,
    max: 1,
  },
  'effect-sepia': {
    class: 'effects__preview--sepia',
    step: 0.1,
    filter: function (value) {
      return `sepia(${value})`;
    },
    min: 0,
    max: 1,
  },
  'effect-marvin': {
    class: 'effects__preview--marvin',
    step: 1,
    filter: function (value) {
      return `invert(${value}%)`;
    },
    min: 0,
    max: 100,
  },
  'effect-phobos': {
    class: 'effects__preview--phobos',
    step: 0.1,
    filter: function (value) {
      return `blur(${value}px)`;
    },
    min: 0,
    max: 3,
  },
  'effect-heat': {
    class: 'effects__preview--heat',
    step: 0.1,
    filter: function (value) {
      return `brightness(${value})`;
    },
    min: 1,
    max: 3,
  },
};
const effectsNode = document.querySelectorAll('.effects__radio');
const sliderNode = document.querySelector('.effect-level__slider');
const effectLevelNode = document.querySelector('.effect-level');
const effectLevelValueNode = document.querySelector('.effect-level__value');

noUiSlider.create(sliderNode, {
  range: {
    min: 0,
    max: 1,
  },
  step: 0.1,
  start: 50,
  connect: 'lower',
});

sliderNode.noUiSlider.on('update', () => {
  Object.keys(effectsKeys).forEach((key) => {
    effectLevelValueNode.value = sliderNode.noUiSlider.get();
    if (imgNode.className === effectsKeys[key].class) {
      imgNode.style.filter = effectsKeys[key].filter(sliderNode.noUiSlider.get());
    }
  });
});


//Масштаб картинки
const scaleEdit = (evt) => {
  let scaleNumber = parseInt(scaleFieldNode.value, 10);
  if (evt.target === buttonScale.bigger) {
    scaleNumber += digitalValues.SCALE_STEP;
    if (scaleNumber > digitalValues.MAX_SCALE) {
      scaleNumber = digitalValues.MAX_SCALE;
    }
  } else {
    scaleNumber -= digitalValues.SCALE_STEP;
    if (scaleNumber < digitalValues.SCALE_STEP) {
      scaleNumber = digitalValues.MIN_SCALE;
    }
  }
  imgPreviewNode.style.transform = `scale(${scaleNumber / digitalValues.PERCENT})`;
  scaleFieldNode.value = `${scaleNumber}%`;
};

buttonScale.bigger.addEventListener('click', scaleEdit);
buttonScale.smaller.addEventListener('click', scaleEdit);


//Выбираем нужный эффект
effectsNode.forEach((effect) => effect.addEventListener('click', (e) => {
  imgPreviewNode.querySelector('img').className = '';
  Object.keys(effectsKeys).forEach((key) => {
    if (e.target.id === key) {
      imgNode.classList.add(effectsKeys[key].class);
      if (imgNode.className === 'none') {
        imgNode.style.filter = '';
        effectLevelNode.classList.add('hidden');
      } else {
        effectLevelNode.classList.remove('hidden');
        sliderNode.noUiSlider.updateOptions({
          range: {
            min: effectsKeys[key].min,
            max: effectsKeys[key].max,
          },
          step: effectsKeys[key].step,
        });
        sliderNode.noUiSlider.set(effectsKeys[key].max);
      }
    }
  });
}));
