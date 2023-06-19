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

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const delEle = 5;

const deleteInSorted = (arr2, delEle) => {
  console.log('im del ');
};

// deleteInSorted(arr2, delEle);
