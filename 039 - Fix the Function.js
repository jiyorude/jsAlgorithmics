/*
CHALLENGE:
Explain why the output of this function is 12 instead of 3.
How to fix it?
*/

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b);

console.log(alert);

// If run, it outputs 12.

// The issue here is that the numbers are seen as string data.
// In string logic, 1 + 2 = 12 as both numbers are simply glued together.
// To fix this, add "+" in front of a and b, like so:

let c = prompt("First number?", 1);
let d = prompt("Second number?", 2);

alert(+c + +d);
// Now logs 3.
