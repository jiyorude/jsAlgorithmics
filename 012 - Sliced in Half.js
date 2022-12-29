/*
CHALLENGE:
Create a function that returns exactly half of a string
*/

halfAString = (str) => {
  console.log(str.slice(0, str.length / 2));
};

halfAString("Apples"); // App
halfAString("Banana"); // Ban
halfAString("JavaScript"); // JavaS
halfAString("Teddybear"); // Tedd
