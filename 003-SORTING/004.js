console.log('i am merge sort');

// already sorted arr merging

const mergeArr = (arr1, arr2) => {
  const newArr = [];
  let i = (j = 0);

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
};

const left = [1, 3, 5, 7];
const right = [20, 30, 50, 70, 90];
// mergeArr(left, right);

const mergeSort = (arr) => {
  // base-case ..return if arr has left 1 ele or arr.length is 1
  if (arr.length <= 1) {
    return arr;
  }
  // find the middle index of arr
  const mid = Math.floor(arr.length / 2);

  // divide arr in to parts
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  //recursively sort the right and left parts of unsorted arr
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // return merged and sorted arr
  return mergeArr(sortedLeft, sortedRight);
};

const numArr = [9, 6, 1, 4, 0, 2, 3, 5, 8, 7];
console.log(mergeSort(numArr));
