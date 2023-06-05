console.log('hii');
// LINEAR SEARCH

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let eleToFind = 5;

const linearSearch = (arr, eleToFind) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (arr[i] === eleToFind) {
      console.log(arr[i]);
      return arr[i];
    }
    return -1;
  }
};
console.log(linearSearch(arr, eleToFind), 'hii');
// i =0
//
