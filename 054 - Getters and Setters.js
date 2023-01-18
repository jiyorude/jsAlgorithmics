/*
CHALLENGE:
Create a function that uses a getter and a setter
*/

// In short. Getters obtain values from objects and simply return a value of an object.
// Setters set values of properties within an object based on the value passed into the setter function.
// You could change calculations or overwrite values completely if you make a mistake while declaring setters.

class Homework {
  constructor(writer) {
    this.writer = writer;
  } // The homework class takes one input, which is the writer of the homework

  get homeworkWriter() {
    return this.writer;
  } // The getter simply returns the value specified in writer.

  set newHomeworkWriter(newWriter) {
    this.writer = newWriter;
  } // The setter takes a new input, a new writer in this case, and overwrites this.writer with the input given in newWriter
}

const algebraHomework = new Homework(); // algebraHomework now has the class of Homework

algebraHomework.writer = "Annie Redwood"; // We specify the writer to be Annie Redwood

// Let's grab the getter function

console.log(algebraHomework.homeworkWriter);
// Returns Annie Redwood

// Wait. Annie didn't write this. It was Johnny. So let's grab the setter.

algebraHomework.newHomeworkWriter = "Johnny Clarins";

// We've called on the setter function and gave 'Johnny Clarins' as input.

// Now, let's log again:

console.log(algebraHomework.homeworkWriter);

// The first console log states Annie Redwood.
// After we've changed the writer by using the setter, the writer is now Johnny Clarins.

// Final example, shown on MDN:

const letterObj = {
  log: ["a", "b", "c"],

  get latestEntry() {
    return this.log[this.log.length - 1];
  },

  get fullLog() {
    return this.log;
  },

  set newEntry(char) {
    this.log.push(char);
  },
};

// This example combines both the getter and setter example found on MDN.
// I've added a fullLog getter just so we're able to get the full log

/*
We have an array called 'log', consisting of the characters a, b and c.
We have a getter function. It returns the last entry of the array. In our case,
it will be the most recent addition to the array, thus it's called latestEntry.

The second getter returns the entire log for our convenience.

The setter function pushes a new character to the log array. The character is defined
by the char input
*/

// Let's try get the full log

console.log(letterObj.fullLog); // [ 'a', 'b', 'c' ], so it works.

// What is the last addition to log?

console.log(letterObj.latestEntry); // 'c'

// Let's add 'd' to the log.

letterObj.newEntry = "d";

console.log(letterObj.fullLog, letterObj.latestEntry);
// [ 'a', 'b', 'c', 'd' ] and d
