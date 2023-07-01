console.log('i m selection sort');

let arr = [4, 7, -20, 0, 9, 1, -1];
const swap = (i1, i2) => {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
};

for (let j = 0; j < arr.length; j++) {
  let smallestIndex = j;
  for (let i = smallestIndex + 1; i < arr.length; i++) {
    if (arr[i] < arr[smallestIndex]) {
      smallestIndex = i;
    }
  }
  swap(j, smallestIndex);
}
// console.log(arr);
