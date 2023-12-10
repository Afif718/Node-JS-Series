/*
map is a method that transforms each element of an array using a given function,
creating a new array with the results.
It is particularly useful for applying a transformation or operation to each element
in an array and collecting the results in a new array without modifying the original one.

*/

const students = [
  {
    name: "Afif",
    email: "afif@gmail.com",
    skills: ["Java", "Py", "Php"],
  },
  {
    name: "Fahim",
    email: "fahim@gmail.com",
    skills: ["Design", "Building", "Business"],
  },
];

students.map((item) => console.log(item.name));
