import {getRandomNumberOfArray, getAnyNumber, getRandomNumber} from './util.js';

const NAMES = ['Артем', 'Сергей', 'Саша', 'Павел', 'Оля', 'Катя', 'Степа', 'Аня'];
const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.'];

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
  },{
    id: getNumber(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[Math.floor(Math.random() * COMMENTS.length)],
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  },{
    id: getNumber(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[Math.floor(Math.random() * COMMENTS.length)],
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  },{
    id: getNumber(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[Math.floor(Math.random() * COMMENTS.length)],
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  },{
    id: getNumber(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[Math.floor(Math.random() * COMMENTS.length)],
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  },{
    id: getNumber(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[Math.floor(Math.random() * COMMENTS.length)],
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  },{
    id: getNumber(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[Math.floor(Math.random() * COMMENTS.length)],
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  },{
    id: getNumber(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[Math.floor(Math.random() * COMMENTS.length)],
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  },{
    id: getNumber(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[Math.floor(Math.random() * COMMENTS.length)],
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  },{
    id: getNumber(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[Math.floor(Math.random() * COMMENTS.length)],
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  },{
    id: getNumber(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[Math.floor(Math.random() * COMMENTS.length)],
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  },{
    id: getNumber(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[Math.floor(Math.random() * COMMENTS.length)],
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  },{
    id: getNumber(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[Math.floor(Math.random() * COMMENTS.length)],
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  },{
    id: getNumber(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[Math.floor(Math.random() * COMMENTS.length)],
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
  }],
});

const similarObjects = Array.from({length: 25}, createObjects);

export {similarObjects};
