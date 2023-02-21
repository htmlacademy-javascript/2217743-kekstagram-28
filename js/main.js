const NAMES = ['Артем', 'Сергей', 'Саша', 'Павел', 'Оля', 'Катя', 'Степа', 'Аня'];
const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.'];

const getRandomNum = (min, max) => Math.trunc(Math.random() * (max - min + 1) + min);
function getRandomNumOfArray(max) {
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
}
function getAnyNum() {
  const array = [];

  return function () {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const randomNumber = Math.floor(Math.random() * 999);
      if (array.indexOf(randomNumber) === -1) {
        array.push(randomNumber);
        return randomNumber;
      }
    }
  };
}

const getNum = getAnyNum();
const getId = getRandomNumOfArray(25);
const getUrlId = getRandomNumOfArray(25);

const createObjects = () => ({
  id: getId(),
  url: `photos/${getUrlId()}.jpg`,
  description: 'Фото кота',
  likes: getRandomNum(15, 200),
  comments: [{
    id: getNum(),
    avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
    message: COMMENTS[Math.floor(Math.random() * COMMENTS.length)],
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  }],
});

const similarObjects = Array.from({length: 25}, createObjects);

// eslint-disable-next-line no-console
console.log(similarObjects);
