/*
CHALLENGE:
Create a function that filters out negative Integers
*/

negativeIntFilter = (arr) => {
  const result = arr.filter((int) => int > 0);
  console.log(result);
};

const myArray = [-23, -4, 8, 9, 10, -55, 33, 55];

negativeIntFilter(myArray);
// Logs 8, 9, 10, 33, 55
