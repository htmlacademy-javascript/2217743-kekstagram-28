// eslint-disable-next-line no-unused-vars
const stringLength = (str, number) => str.length >= number;

// eslint-disable-next-line no-unused-vars
const palindromeCheck = (str) => {
  const newStr = str.toLowerCase().split('').reverse()
    .filter((el) => el !== ' ').join('');
  return newStr === str.trim().toLowerCase().split(' ').join('');
};

// eslint-disable-next-line no-unused-vars
const findNumbers = (value) => {
  if (!value) {
    return NaN;
  } else if (typeof value !== 'number') {
    value = value.split(' ').filter((el) => !isNaN(el)).join('').replace(/[\s.,%]/g, '');
    value = value.length > 0 ? parseInt(value, 10) : NaN;
  }
  return value;
};

// eslint-disable-next-line no-unused-vars
const completeString = (str, strLength, addSymbol) => {
  if (str.length < strLength) {
    addSymbol = addSymbol.split('');
    str = str.split('');
    if (addSymbol.length >= strLength) {
      addSymbol.splice(strLength - str.length, addSymbol.length);
    }
    for (let i = 1; i < strLength; i++) {
      if (str.length < strLength) {
        str.unshift(addSymbol[addSymbol.length - i]);
      }
    }
    str = str.map((el) => {
      if (typeof el === 'undefined') {
        el = addSymbol[0];
      }
      return el;
    });
  }
  return str.join('');
};


