// search , insert and delete in sorted array
const arr1 = [1, 2, 3, 4, 5, 7, 8, 9];
const insertVal = 6;

//**************************************************************************************
//insert in sorted arr

const insertInSorted = (arr1, insertVal) => {
  let i;
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] >= insertVal) {
      arr1.splice(i, 0, insertVal);
      return;
    }
  }
};

// insertInSorted(arr1, insertVal);
// console.log(arr1);

//******************************************************************************************
// Delet in sorted
//Method 1 using linearSearch O(N)
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const delEle = 9;

const deleteInSorted = (arr2, delEle) => {
  console.log('im del ');
  let i;
  for (i = 0; i < arr2.length; i++) {
    if (arr2[i] === delEle) {
      arr2.splice(i, 1);
      return;
    }
  }
};

// deleteInSorted(arr2, delEle);
// console.log(arr2);

//Method 2 using BinarySearch O(log N)////////////////////
const arr3 = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9];
const remEle = 10;

const binarySearch = (arr, ele, low, high) => {
  const mid = Math.floor((low + high) / 2);

  if (high < low) {
    return -1;
  }

  if (arr[mid] === ele) {
    let previousIndex = mid - 1;
    while (ele === arr[previousIndex]) {
      previousIndex = previousIndex - 1;
    }
    return previousIndex + 1;
  } else if (ele > arr[mid]) {
    return binarySearch(arr, ele, mid + 1, high);
  } else {
    return binarySearch(arr, ele, low, mid - 1);
  }
};

const doMyJob = (arr, ele) => {
  //do bs
  const startIndex = binarySearch(arr, ele, 0, arr.length - 1);
  if (startIndex === -1) {
    throw Error('you stupid fellow value does not exist');
  }
  // iterate  ele===i
  let i = startIndex;
  while (ele === arr[i]) {
    i++;
  }
  let delCount = i - startIndex;
  //splice
  arr.splice(startIndex, delCount);
};

// doMyJob(arr3, remEle);
// console.log(arr3);
