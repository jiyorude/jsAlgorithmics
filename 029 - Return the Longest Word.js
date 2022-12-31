/*
CHALLENGE:
Create a function that returns the length of the longest word in the provided sentence.
Copy that function and adjust it so that it actually outputs the longest word.
*/

longestWordLength = (str) => {
  let splits = str.split(" ");
  let currentMax = 0;

  for (let x = 0; x < splits.length; x++) {
    if (splits[x].length > currentMax) {
      currentMax = splits[x].length;
    }
  }
  console.log(currentMax);
};

longestWordLength("On saturday, we went to see a movie"); // 9
longestWordLength("The end result was absolutely preposterous and extremely hideous"); // 12
longestWordLength("My curriculum vitae was not on par with Samantha's"); // 10

theLongestWord = (str) => {
  let wordSplit = str.split(" ");
  let sort = wordSplit.sort((a, b) => {
    return b.length - a.length;
  });
  console.log(sort[0]); // 0 is added here since the longest word will be at the beginning of the array created by sort.
};

theLongestWord("On saturday, we went to see a movie"); // saturday
theLongestWord("The end result was absolutely preposterous and extremely hideous"); // preposterous
theLongestWord("My curriculum vitae was not on par with Samantha's"); // curriculum
