/*
CHALLENGE:
Convert the first variable into a number.
Convert the second variable into a Boolean
Convert the third variable into a string
*/

let varOne = "479";
let varTwo = "true";
let varThree = 356;

varOne = Number(varOne);
console.log(typeof varOne + " " + varOne);
// Logs number 479

varTwo = Boolean(varTwo);
console.log(typeof varTwo + " " + varTwo);
// Logs boolean true

varThree = String(varThree);
console.log(typeof varThree + " " + varThree);
// Logs string 356
