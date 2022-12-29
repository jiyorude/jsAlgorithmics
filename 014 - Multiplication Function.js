/*
CHALLENGE:
Create a function that does the following:
if a is smaller than b, divide a by b
if a is larger than b, multiply a by b

Also create a ternary function.
*/

// OPTION 1:

multiplicationFunc = (a, b) => {
  let result;

  if (a < b) {
    result = a / b;
  } else {
    result = a * b;
  }

  return result;
};

console.log(multiplicationFunc(3, 5)); // 0.6 - Divides
console.log(multiplicationFunc(22, 3)); // 66 - Multiplies
console.log(multiplicationFunc(1, 2)); // 0.5 - Divides
console.log(multiplicationFunc(2, 1)); // 2 - Multiplies
console.log(multiplicationFunc(5, 10)); // 0.5 - Divides

// OPTION 2: Ternary Statement

ternaryMultiplication = (a, b) => {
  let result = a < b ? a / b : a * b;
  return result;
};

console.log(ternaryMultiplication(2, 3)); // 0.6 - Divides
console.log(ternaryMultiplication(3, 2)); // 6 - Multiplies
console.log(ternaryMultiplication(10, 10)); // 100 - Multiplies
console.log(ternaryMultiplication(5, 10)); // 0.5 - Divides
console.log(ternaryMultiplication(5, 3)); // 15 - Multiplies
