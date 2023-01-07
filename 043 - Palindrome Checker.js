/*
CHALLENGE:
Create a function that checks whether a word is a palindrome.
A palindrome checker returns true if the word is spelled the same front- as backwards.
It should ignore all special casings.
*/

/*
To-Do:
// Create a regex that filters out any special characters and convert to either uppercase or lowercase.
// Split the characters
// Find a way to go over all of the characters and return a boolean value based whether they are palindromes.
*/

palindromeChecker = (string) => {
  let stringFilter = string.replace(/[\W_]/g, "");
  let lowerCase = stringFilter.toLowerCase();
  let strLoop = lowerCase.split("");

  for (let x = 0; x < strLoop.length - 1 / 2; x++) {
    if (strLoop[x] !== strLoop[strLoop.length - x - 1]) {
      return false;
    }
  }
  return true;
};

console.log(palindromeChecker("eyeball")); // Logs false
console.log(palindromeChecker("race car")); // Logs true
console.log(palindromeChecker("almostomla")); // Logs false
