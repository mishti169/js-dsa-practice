// console.log('hii');
// LINEAR SEARCH

let arr = [10, 20, 30, 40, 50, 60, 70, 80];
let eleToFind = 50;
// METHOD 1
const linearSearch = (arr, eleToFind) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (arr[i] === eleToFind) {
      console.log(arr[i]);
      return i;
    }
  }
  return -1;
};
// console.log(linearSearch(arr, eleToFind), 'hii');

// METHOD 2
const linearSearch2 = (arr, eleToFind) => {
  return arr.indexOf(eleToFind);
};
// console.log(linearSearch2(arr, eleToFind), 'hii');
