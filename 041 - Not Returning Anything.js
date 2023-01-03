/*
CHALLENGE:
Explain the difference between both return statements and what they will eventually return.
*/

someLongFunction = () => {
  return
  "My name is Dillan and I like to code! " + "My hobbies are JavaScript and C##. " + "Nice to meet you btw.";
};

anotherLongFunction = () => {
  return (
    "My name is Dillan and I like to code! " + "My hobbies are JavaScript and C##. " + "Nice to meet you btw."
  );
};

// Answer:

/*
JavaScript expects a semicolon after return. In the first function, we've hit an enter and went onward to the next line.
This is equal as return; as JS assumes the return statement has been completed by us since we went to another line.

In short, the first function does not return anything. The second function adds the elements for return into parentheses,
telling return that everything between these parentheses should be returned. Now our function works like it should.
*/
