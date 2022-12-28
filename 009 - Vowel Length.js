/*
CHALLENGE:
Return the length of a sentence plus the amount of vowels
*/

// OPTION 1 Length of a sentence

const dinnerTime = "Garfield said: 'It's time to eat Lasagna!'";

const howLong = dinnerTime.length;
console.log(howLong); // Logs 42 characters

// OPTION 2 Amount of Vowels in the sentence

const noLasagnaForYou = "Nermal replied: 'I ate it all. Sorry Garfield'.";

let vowelRegex = /[aeiou]/gi;
let vowelLasagna = noLasagnaForYou.match(vowelRegex);
let vowelLength = vowelLasagna.length;

console.log(vowelLength); // Returns 14 vowels
