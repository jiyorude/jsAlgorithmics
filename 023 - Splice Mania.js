/* 
CHALLENGE:
Create three functions that implement the various uses of splice.
*/

// OPTION 1: Delete parts of array

spliceDelete = (arr, start, del) => {
  let splicedArray = arr.splice(start, del);
  console.log(splicedArray);
};

const thisArr = ["John", "Barry", "Dave"];
spliceDelete(thisArr, 1, 2); // Returns Barry and Dave; the deleted elements.
console.log(thisArr); // Only John remains as element 1 and 2 have been spliced.

// OPTION 2: Replace parts of array

spliceReplace = (arr, start, del, rep) => {
  arr.splice(start, del, rep);
  console.log(arr); // This returns the adjusted array instead of only what's being replaced! arr is defined instead of replacedArray
};

const thatArr = [3, 4, 5, 7, 7, 8];
const myArr = [23, 24, 25, 25, 25, 27, 28];

spliceReplace(thatArr, 3, 1, 6); // Logs 3, 4, 5, 6, 7, 8
spliceReplace(myArr, 3, 2, 26); // Logs 23, 24, 25, 26, 27, 28

// OPTION 3: Add elements to an Array

spliceAdd = (arr, index, add) => {
  arr.splice(index, 0, add);
  console.log(arr);
};

// This one is defined purely for tresArray.
// If we were to use spliceAdd to add two things, it wouldn't work as spliceAdd only accepts one additive.
// If we were to use spliceAddTwo for the other arrays, there would be a undefined somewhere as add2 isn't properly used.

spliceAddTwo = (arr, index, add, add2) => {
  arr.splice(index, 0, add, add2);
  console.log(arr);
};

const unoArray = [100, 101, 102, 103, 104];
const dosArray = [110, 111, 112, 114, 115];
const tresArray = [116, 119, 120];

spliceAdd(unoArray, 5, 105); // 100, 101, 102, 103, 104, 105
spliceAdd(dosArray, 3, 113); // 110, 111, 112, 113, 114, 115
spliceAddTwo(tresArray, 1, 117, 118); // 116, 117, 118, 119, 120
