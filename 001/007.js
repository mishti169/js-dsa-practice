//**************************************************************
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

const index = binarySearch(arr, ele, 0, arr.length - 1);
console.log(index);

//************************************************************************

//HOME WORK
//Binary Search with duplicates ( both  index should be return )
