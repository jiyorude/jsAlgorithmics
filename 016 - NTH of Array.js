/* 
CHALLENGE:
Create a function that takes two parameters.
The first specifies an array, the second a number which returns the value 
on said position inside the array.

Take note that index - 1 is used to negate the zero-indexing.
In this challenge, the array index starts at 1.
*/

nthOfArray = (arr, val) => {
  let myArray = arr;
  let index = val;

  console.log(myArray.at(index - 1));
};

nthOfArray([2, 3, 4, 5, 6, 7], 2); // Logs 3
nthOfArray([1, 2, 3, 4, 5], 5); // Logs 5
nthOfArray([16, 17, 18, 19, 20], 4); // Logs 19
