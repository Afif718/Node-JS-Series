//filter method in js
const arr = [20, 10, 30, 11, 55, 32, 90];

let result = arr.filter((val) => {
  //return val > 10 && val <55;
  //return val === 10;
  return val >= 10;
});

console.log(result);
