/* 
CHALLENGE:
Create a function that returns shift and pop values in a new array
*/

popAndShift = (arr) => {
  let popValue = arr.pop();
  let shiftValue = arr.shift();
  let newArr = [shiftValue, popValue];
  console.log(newArr);
};

popAndShift(["I", "Like", "To", "Eat"]); // I Eat
