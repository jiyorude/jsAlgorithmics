/*
CHALLENGE:
Return a function that deletes the first three characters of a string.
*/

sliceString = (str) => {
  let newString = str.slice(3);
  console.log(newString);
};

sliceString("1234567"); // 4567
sliceString("Welcome to the mall!"); // come to the mall!
sliceString("Spaghetti Bolognese"); // ghetti Bolognese
