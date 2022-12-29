/*
CHALLENGE:
Return a function that deletes the last three characters of a string.
*/

sliceLastThree = (str) => {
  console.log(str.slice(-3));
};

sliceLastThree("Let's go to the beach"); // ach
sliceLastThree("I like to ride on my bike"); // ike
sliceLastThree("He eats a sandwich"); // ich
