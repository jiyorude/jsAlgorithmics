/*
CHALLENGE:
As seen in eloquent javascript
Create a function that counts the amount of characters in a string.
*/

countB = (str, char = "b") => {
  let count = 0;
  for (let x = 0; x < str.length; x++) {
    if (str[x] == char) {
      count = count + 1;
    }
  }
  return count;
};

console.log(countB("bibliophile")); // Returns 2
console.log(countB("flibbertigibbet")); // Returns 4
console.log(countB("blubbered")); // Returns 3

// If the words were to start with a capital letter, blubbered would have 2 b's and bibliophile only 1.
