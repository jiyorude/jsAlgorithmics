/*
CHALLENGE:
Create a function that iterates the contents of an array throuhg a for loop.
The function should return a filtered version of the array in which the element
containing 'el' is deleted in its entirety.
*/

iterateFilter = (arr, el) => {
  let filterArray = [];

  for (let x = 0; x < arr.length; x++) {
    if (arr[x].indexOf(el) === -1) {
      filterArray.push(arr[x]);
    }
  }

  console.log(filterArray);
};

const nrArray = [
  [55, 36, 26],
  [36, 42, 88, 92],
];

iterateFilter(nrArray, 26);
// Returns 36, 42, 88, 92 as the first array contains 26.

const nrTwoArray = [
  [44, 23, 11],
  [99, 88, 11],
  [45, 89, 102],
];

iterateFilter(nrTwoArray, 11);
// Returns 45, 89, 102 as both other arrays contain 11

const nrThreeArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

iterateFilter(nrThreeArray, 13);
// Returns 1 till 12 in its entirety because 13 is in none of the arrays.
