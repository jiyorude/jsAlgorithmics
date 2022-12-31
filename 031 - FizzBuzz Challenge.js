/*
CHALLENGE:
Found in Eloquent JavaScript:
The FizzBuzz Challenge. Print all numbers from 1 to 100.
If a number is divisible by 3, print Fizz instead.
If a number is divisible by 5 print Buzz

The second part of the challenge is to adjust your code
that if it is divisible by both 3 and 5, the console should print FizzBuzz
*/

for (let x = 1; x <= 100; x++) {
  let xO = "";

  if (x % 3 == 0) {
    xO += "Fizz";
  }

  if (x % 5 == 0) {
    xO += "Buzz";
  } else if (x % 3 == 0 && x % 5 == 0) {
    xO += "FizzBuzz";
  }

  console.log(xO || x);
}
