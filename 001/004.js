const arr = [1, 2, 3, 4, 5, 6];
const d = 4;
// Method 1 ;;
// First store the elements from index d to N-1 into the temp array.
// Then store the first d elements of the original array into the temp array.
// Copy back the elements of the temp array into the original array

const rotationLeftD = (arr, d) => {
  let temp = [];

  for (let i = d; i < arr.length; i++) {
    temp.push(arr[i]);
    console.log(temp);
  }
  for (let i = 0; i < d; i++) {
    console.log(arr[i]);

    // console.log(temp);
    temp.push(arr[i]);
    console.log(temp);
  }
};
// rotationLeftD(arr, d);

// METHOD 2;;

// Store the first element of the array in a temporary variable.
// Shift the rest of the elements in the original array by one place.
// Update the last index of the array with the temporary variable.
// Repeat the above steps for the number of left rotations required.

const rotationLeftD2 = (arr, d) => {
  for (let i = 0; i < d; i++) {
    let temp = arr[0];

    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp;
  }
  console.log(arr);
};
// rotationLeftD2(arr, d);
