const n = 3;
const printStar = (n) => {
  if (n === 0) {
    return;
  }
  console.log('*');
  return printStar(n - 1);
};
// printStar(n);

const num = 3;
const printNum = (n) => {
  if (n === 0) {
    return;
  }
  printNum(n - 1);
  console.log(n);
};
printNum(num);
