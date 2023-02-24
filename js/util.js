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

export {getAnyNumber, getRandomNumberOfArray, getRandomNumber};
