const arr = [3, 5, 1, 6, 9, 4];
const n = 5;
const unsortedArr = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
};

unsortedArr(arr, n);
