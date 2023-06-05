// REVERSE A STRING

let str = 'mayur';
// METHOD 1

const reverseStr = (str) => {
  return str.split('').reverse().join('');
};
// console.log(reverseStr(str), 'str');

//METHOD 2

const reverseStr2 = (str) => {
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

console.log(reverseStr2(str), 'str2');
