/*
filter is a method used in programming to create a new array
 containing only the elements that satisfy a specified condition.
It iterates through each element in an array, applying a given test
 function. Elements that pass the test are included in the new array,
  while those that don't are excluded. This allows
 you to selectively extract elements based on a particular criterion.
*/

//filter method in js
const arr = [20, 10, 30, 11, 55, 32, 90];

let result = arr.filter((val) => {
  //return val > 10 && val <55;
  //return val === 10;
  return val >= 10;
});

console.log(result);
