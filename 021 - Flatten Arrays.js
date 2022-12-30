/* 
CHALLENGE:
Create a function that turns multiple arrays into a single array
*/

flattener = (...arr) => {
  console.log(arr.flat());
};

flattener([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// Returns 1, 2, 3, 4, 5, 6, 7, 8, 9
