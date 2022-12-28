/*
CHALLENGE:
Create a function that returns a boolean value of true whenever a value can be divided by 10
*/

boolDivider = (val) => {
  let result = val / 10;

  if (result <= 0) {
    console.log(false);
  } else {
    console.log(true);
  }
};

boolDivider(-2); // Logs false
boolDivider(2); // Logs true
boolDivider(25); // Logs true
