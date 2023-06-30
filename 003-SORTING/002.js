console.log('i m selection sort');

let arr = [5, 2, 7, 0, -9, 4];

// function swap(i1, i2) {
//   let temp = arr[i1];
//   arr[i1] = arr[i2];
//   arr[i2] = temp;
// }

let smallest = arr[0];
console.log(smallest, 'smallest');

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
console.log(smallest, 'after loop smllets');
// // swap(arr[i],  smallest);
