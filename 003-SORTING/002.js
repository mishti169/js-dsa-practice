console.log('i m selection sort');

let arr = [4, 7, 2, 0, 9, 1, -1];
console.log(arr);
const swap = (i1, i2) => {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
};

for (let j = 0; j < arr.length; j++) {
  let smallest = j;
  for (let i = smallest + 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = i;
    }
  }
  swap(j, smallest);
}
console.log(arr);
