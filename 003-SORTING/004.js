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

const mergeSort = () => {};

const numArr = [9, 6, 1, 4, 0, 2, 3, 5, 8, 7];
mergeSort(numArr);
