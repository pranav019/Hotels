// library installed
var prompt = require("prompt-sync")();
// npm i prompt-sync

var a = 5;
var b = 6;
var c = 7;
var ans = a + b + c;
console.log("Answer " + ans);
// -----------------------------------------------
const cars = ["Volvo", "Mahindra", "BMW", 45];
console.log(cars);
cars.push("merc");
// -------------------------------------------------
// OBJECT :-
const person = {
  // key : value
  name: "John Doe",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "swimming", "painting"],
};
console.log(person);
// -------------------------------------------------

// Function
const ages = [32, 33, 26, 40];
const result = ages.filter(checkAge);
console.log(result);

function checkAge(age) {
  return age % 2 == 0;
}
// ----------------------------------------------------------------
// taking user input : First need to install prompt library using
// npm i prompt-sync
const age = prompt("Please enter your age : ");
if (age < 18) {
  console.log("Sorry, you are underage");
} else {
  console.log("Signed in successfully");
}
