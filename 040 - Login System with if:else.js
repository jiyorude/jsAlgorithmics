/*
CHALLENGE:
Create a login system with if/else statements and prompt/alerts
*/

let user = prompt("Who's there?");

if (user === "Admin") {
  let password = prompt("Password?");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === "" || password === null || password === undefined) {
    alert("Cancelled!");
  } else {
    alert("Wrong Password!");
  }
} else if (user === null || user === "" || user === undefined) {
  alert("Cancelled!");
} else {
  alert("I don't know you.");
}
