/*
forEach is a method used in programming to iterate over
 each element in a collection, like an array or a list.
It applies a provided function once for each element in
 the collection, allowing you to perform a specific action
  or operation on each item.
*/

const students = {
  name: "Afif",
  email: "afif@gmail.com",
  skills: ["Java", "Py", "Php"],
};

students.skills.forEach((skill) => {
  console.log(skill);
});
