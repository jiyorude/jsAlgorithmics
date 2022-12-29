/*
CHALLENGE:
Create a function that splits a large amount of numbers into digits
*/

digitSplitter = (nrs) => {
  const single = nrs + "";
  const split = single.split("");
  console.log(split.map((nr) => nr));
};

digitSplitter(235623423);
// [2, 3, 5, 6, 2, 3, 4, 2, 3]

digitSplitter(555777231);
// [5, 5, 5, 7, 7, 7, 2, 3, 1]
