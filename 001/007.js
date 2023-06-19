//**************************************************************************************
// BInary Search Method

const arr = [10, 20, 30, 40, 50, 60];
const ele = 30;

const binarySearch = (arr, ele, low, high) => {
  const mid = Math.floor(low + high / 2);

  if (high < low) {
    return -1;
  }

  if (arr[mid] === ele) {
    return mid;
  } else if (ele > arr[mid]) {
    return binarySearch(arr, ele, mid + 1, high);
  } else {
    return binarySearch(arr, ele, low, mid - 1);
  }
};
// const index = binarySearch(arr, ele, 0, arr.length - 1);
// console.log(index);

//HOME WORK//
//**************************************************************************************

//Binary Search with duplicates ( both  index should be return )
//1ST occurence
console.log('hiii');
const array = [1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8, 9];
const key1st = 3;

const binarySearch2 = (array, key1st, low, high) => {
  const mid = Math.floor(low + high / 2);

  if (high < low) {
    return -1;
  }

  if (array[mid] === key1st) {
    let prev = mid - 1;
    while (key1st === array[prev]) {
      prev = prev - 1;
    }
    return prev + 1;
  } else if (key1st > array[mid]) {
    binarySearch2(array, key1st, mid + 1, high);
  } else {
    binarySearch2(array, key1st, low, mid - 1);
  }
};
// const i = binarySearch2(array, key1st, 0, array.length - 1);
// console.log(i);