function stringLength(str) {
  return str.length > 10
}

function palindromeCheck(str) {
  let newStr = str.toLowerCase().split('').reverse()
    .filter(el => el !== ' ').join('');
  return newStr === str.trim().toLowerCase().split(' ').join('');
}

function findNumbers(value) {
  if (!value) {
    return NaN;
  } else if (typeof value != 'number') {
    value = value.split(' ').filter(el => {
      return !isNaN(el);
    }).join('');
    value = value.length > 0 ? parseInt(value) : NaN;
  }
  return value;
}

function completeString(str, strLength, addSymbol) {
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
    str = str.map(el => {
      if (typeof el == 'undefined') {
        el = addSymbol[0];
      }
      return el;
    })
  }
  return str.join('');
}
