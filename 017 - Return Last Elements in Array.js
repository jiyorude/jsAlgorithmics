/* 
CHALLENGE:
Return last elements in an array based on 'n' input
*/

arrReturn = (arr, nr) => {
  console.log(arr.slice(- nr));
};

arrReturn([1, 2, 3, 4, 5, 6, 7], 3); // 5, 6, 7
arrReturn([12, 13, 14, 15, 16], 1); // 16
arrReturn([5, 10, 33, 45], 2); // 33, 45
