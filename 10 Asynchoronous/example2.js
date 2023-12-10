let a = 10;
let b = 0;

setTimeout(() => {
  b = 20;
}, 2000);

//it will be first executed and the result will be 10 not 30
console.log(a + b);
