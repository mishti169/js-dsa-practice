const arr = [3, 5, 1, 6, 9, 4];
const n = 6;

//SEARCH METHOD
const searchInUnsortedArr = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
};
// console.log(searchInUnsortedArr(arr, n));

// INSERT METHOD

// insert at the end
const insertAtTheEnd = (arr, n) => {
  arr.push(n);
};
// insertAtTheEnd(arr, n);
// console.log(arr);

//insert at the middle
const pos = 0;
const val = 10;
const insertATTheMiddle = (arr, pos, val) => {
  debugger;
  let i = arr.length - 1;
  for (i; i >= pos; i--) {
    arr[i + 1] = arr[i];
  }
  arr[pos] = val;
};
// insertATTheMiddle(arr, pos, val);
// console.log(arr, 'hii');

// DELET METHOD

const findVal = 6;

const findELe = (findVal, arr) => {
  let i;
  for (i = 0; i < arr.length; i++) {
    arr[i] === findVal;
    return i;
  }
  return -1;
};
const deletElement = (findVal, arr) => {
  const pos = findELe(findVal, arr);
  if (pos === -1) {
    return arr.length;
  }

  let i;
  for (i = pos; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  return arr.length - 1;
};
