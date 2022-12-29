/*
CHALLENGE:
Create a function that checks if a number is even
*/

evenNumberChecker = (nr) => {
  console.log(nr % 2 === 0);
};

evenNumberChecker(3); // False
evenNumberChecker(4); // True
evenNumberChecker(7); // False
evenNumberChecker(22); // True
