// search , insert and delet in sorted array
//**************************************************************************************
const arr1 = [1, 2, 3, 4, 5, 7, 8, 9];
const insertVal = 6;

//insert in sorted arr

const insertInSorted = (arr1, insertVal) => {
  let i;
  for (i = 0; i < arr1.length; i++) {
    if (arr[i] >= insertVal) {
      arr1.splice(i, 0, insertVal);
    }
  }
};

// console.log(insertInSorted(arr1, insertVal));
// insertInSorted(arr1, insertVal);
