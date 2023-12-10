// Define variables 'a' and 'b'
let a = 20;
let b = 0;

// Create a Promise called 'waitingData' that resolves with the value 40 after a 2000ms (2-second) timeout
const waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(40);
  }, 2000);
});

// Once 'waitingData' resolves, log the sum of 'a' and the resolved data to the console
waitingData.then((data) => {
  console.log(a + data);
});
