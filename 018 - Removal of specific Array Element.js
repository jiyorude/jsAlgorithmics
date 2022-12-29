/* 
CHALLENGE:
Create a function that removes a specific element from an array.
The first input should take an array. The second should specify which element to remove.
The filtered array must be returned in the console.
*/

arrayFilter = (arr, removeWord) => {
  let filteredArray = arr.filter((word) => word !== removeWord);
  console.log(filteredArray);
};

arrayFilter(["Spaghetti", "Bolognese", "and", "Meatballs"], "Bolognese"); // Spaghetti and Meatballs
arrayFilter(["Dogs", "Cats", "rule"], "Dogs"); // Cats Rule
arrayFilter(["I", "do not", "like", "to", "sleep"], "do not"); // I like to sleep
