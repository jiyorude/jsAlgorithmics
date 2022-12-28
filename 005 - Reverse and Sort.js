/*
CHALLENGE:
Reverse an Array and sort an array from highest to lowest
*/


// OPTION 1: Reversing an entire array

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

const reversed = myArray.reverse();

console.log(reversed); // Logs [8, 7, 6, 5, 4, 3, 2, 1]


// OPTION 2: Sorting from lowest to highest

const randomArr = [5, 98, 10, 8, 22, 99, 102, 34, 77, 3, 0];
const sortArr = randomArr.sort((a, b) => a - b);

console.log(sortArr);
// Logs 0, 3, 5, 8, 10, 22, 34, 77, 98, 99, 102


// OPTION 3: Sorting functions

hiToLow = (arr) => {
  arr.sort((a, b) => b - a);
  console.log(arr);
};

lowToHi = (arr) => {
  arr.sort((a, b) => a - b);
  console.log(arr);
};

const myTestArray = [55, 987, 20, 5, 3, 12, 44, 23, 66, 120, 334, 456];

hiToLow(myTestArray);
lowToHi(myTestArray);
