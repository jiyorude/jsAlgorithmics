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
  // Takes the string input from 'string' and replaces all of the non numeric characters with nothing.
  let stringFilter = string.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>]/gi, "");
  // Takes the filtered string and transforms everything to lowercase, if any uppercase characters were there anyway.
  let lowerCase = stringFilter.toLowerCase();
  // Splits all of the characters in the word on character basis and puts them into an array.
  let strLoop = lowerCase.split("");
  // Let's say we've started the function with 'HElLo??'. At this moment, it is transformed into:
  //['h','e','l','l','o'] as it went through the regex, lowerCase and Split functions. The question marks have been deleted as well.

  for (let x = 0; x < strLoop.length; x++) {
    if (strLoop[x] !== strLoop[strLoop.length - x - 1]) {
      // If the current iteration of x inside StrLoop does not match the same iteration on the other half of strLoop: return a boolean of false.
      return false;
    }
  }
  return true;
};

console.log(palindromeChecker("HElLo?")); // Logs false
console.log(palindromeChecker("race car")); // Logs true
console.log(palindromeChecker("almostomla")); // Logs false
console.log(palindromeChecker("eye")); // Logs true
console.log(palindromeChecker("Rabbit")); // Logs false
console.log(palindromeChecker("Murder for a jar of red rum")); // Logs true
