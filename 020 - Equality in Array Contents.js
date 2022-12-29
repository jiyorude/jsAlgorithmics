/* 
CHALLENGE:
Return a boolean value depending whether all elements of an array are equal
*/

equalityChecker = (arr) => {
  let checker = arr.every((el) => el === arr[0]);
  console.log(checker);
};

equalityChecker([true, false, true, true]); // False
equalityChecker([false, false, false]); // True
