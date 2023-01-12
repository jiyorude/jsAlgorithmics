/*
CHALLENGE:
Create a function that utilizes setInterval and setTimeOut
*/

// setTimeOut

greeting = () => {
  console.log("Hello, nice to meet you.");
};

let delayedGreeting = setTimeout(greeting, 2000);

console.log(delayedGreeting); // Shows Hello, nice to meet you, 2 seconds after the run button was clicked.

// setInterval

reminder = () => {
  console.log("Are you studying yet?");
};

let studyReminder = setInterval(reminder, 2000);

// Now we also need something to stop the reminder. Otherwise it will go on forever.

setTimeout(() => {
  clearInterval(studyReminder);
  console.log("Ok, fine, I will stop.");
}, 10000);

// Now it outputs 4 instances of are you studying yet? After that, it will say: Ok, fine, I will stop.
