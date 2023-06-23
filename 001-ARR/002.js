let arr = [1, 2, 3, 4, 5, 6];

// const swap()

const reverseAnArr = (arr) => {
  const iteration = Math.floor(arr.length / 2);

  for (let i = 0; i < iteration; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  // return arr;
};
// reverseAnArr(arr);
// console.log(arr, 'reverse');

// METHOD 2
const reverseAnArr2 = (arr) => {
  return arr.reverse();
};
// console.log(reverseAnArr2(arr), 'M2');
