/* 
CHALLENGE:
Return the average of a Numeric Array
*/

averageInt = (arr) => {
  let sum = arr.reduce((acc, cv) => acc + cv);
  let average = sum / arr.length;
  console.log(average);
};

// Or:

anotherAverage = (arr) => {
  console.log(arr.reduce((acc, cv) => acc + cv) / arr.length);
};

averageInt([5, 3, 1, 4, 6]); // 3.8
anotherAverage([5, 3, 1, 4, 6]); // Also returns 3.8 since it's the same function, but rewritten to a single line of code.
averageInt([10, 23, 55, 125, 2, 6]); // 36.83

// Example of getting my average grade:

averageInt([5.5, 7.5, 9.1, 4.2, 6.1, 6.4, 6.9, 7.8, 5.2, 4.8]); // A 6.3! Glad I passed this semester!
