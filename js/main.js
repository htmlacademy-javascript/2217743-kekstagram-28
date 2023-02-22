const NAMES = ['Артем', 'Сергей', 'Саша', 'Павел', 'Оля', 'Катя', 'Степа', 'Аня'];
const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.'];

const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min + 1) + min);

const getRandomNumberOfArray = (max) => {
  const array = [];
  while (array.length < max) {
    const randomNumber = Math.floor(Math.random() * max);
    if (array.indexOf(randomNumber) === -1) {
      array.push(randomNumber);
    }
  }

  return function () {
    const id = array[0];
    array.shift();
    return id;
  };
};

const getAnyNumber = () => {
  const array = [];

  return function () {
    const IS_NEW_NUMBER = true;
    while (IS_NEW_NUMBER) {
      const randomNumber = Math.floor(Math.random() * 999);
      if (array.indexOf(randomNumber) === -1) {
        array.push(randomNumber);
        return randomNumber;
      }
    }
  };
};

const getNumber = getAnyNumber();
const getId = getRandomNumberOfArray(25);
const getUrlId = getRandomNumberOfArray(25);

const createObjects = () => ({
  id: getId(),
  url: `photos/${getUrlId()}.jpg`,
  description: 'Фото кота',
  likes: getRandomNumber(15, 200),
  comments: [{
    id: getNumber(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[Math.floor(Math.random() * COMMENTS.length)],
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  }],
});

const similarObjects = Array.from({length: 25}, createObjects);

// eslint-disable-next-line no-console
console.log(similarObjects);
