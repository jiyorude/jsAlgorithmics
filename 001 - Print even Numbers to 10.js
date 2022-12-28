/* 
CHALLENGE:
Print even numbers from 0 to 10. 
Try to be creative in finding other ways that fulfill your purpose
*/

// OPTION 1: for-loop

for (let x = 0; x <= 10; x += 2) {
  console.log(x);
}
// Logs: 0, 2, 4, 6, 8, 10

// OPTION 2: while-loop

let i = 0;

while (i < 10) {
  console.log(i);
  i += 2;
}

console.log(i);
// Logs 0, 2, 4, 6, 8, 10

// OPTION 3: The weird way

let n = -2;

do {
  n += 2;
  console.log(n);
  if (n === 10) break;
} while (n < 20);

// Logs 0, 2, 4, 6, 8, 10
