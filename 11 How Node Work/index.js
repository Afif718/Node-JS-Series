//It will be executed first
console.log("Hell0");

////It will be executed 4th
//It will be first registered in Node API
setTimeout(() => console.log("2 seconds"), 2000);

//It will be executed 3rd
//It will be first registered in Node API
setTimeout(() => console.log("0 seconds"), 0);

//It will be executed 2nd
console.log("Afif");
