/* 
CHALLENGE:
Return only the negative integers found inside an array
*/

negativeIntegers = (arr) => {
  let filteredArray = arr.filter((int) => int < 0);
  console.log(filteredArray.length);
};

negativeIntegers([25, -33, -45, 2, 0, 1, -99]); // 3
negativeIntegers([-33, -55, -12, -1, -44]); // 5
negativeIntegers([-4, -9, -3, 99, 88, -2]); //4
