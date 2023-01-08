/*
CHALLENGE:
Show that you understand the 'in' operator by using it with objects and with a for-in loop
*/

let myGar = {
  name: "garfield",
  age: undefined,
  occupation: "lazy orange cat, lasagna-tester, dog-bully",
  hobbies:
    "eating lasagna, shooting nermal to the moon, bullying odie, watching anything on tv that is not ice-skating, telling john to do groceries",
  enemies: "nermal",
};

console.log("food" in myGar); // Returns false, because this value is not in the object.
console.log("enemies" in myGar); // Returns true, because enemies is present in the object.

for (values in myGar) {
  console.log(myGar[values]);
}

// Returns all of the values of the object's keys.
// Garfield, undefined, lazy orange cat..., eating lasagna..., nermal.

let users = {
  name: "Fred Davids",
  age: 42,
  isAdmin: false,
  lastLoggedIn: "January 1st, 2023, 5PM"
};

let emptyValues = [];
let emptyKeys = [];

for (let key in users) {
  console.log(key);
  console.log(users[key]);
  emptyValues.push(users[key]);
  emptyKeys.push(key);
}

console.log(emptyValues);
console.log(emptyKeys);

// When logged, the keys are pushed to the emptyKeys array.
// When logged, the values are pushed to emptyValues.

/*
emptyKeys = 
['name', 'age', 'isAdmin', 'lastLoggedIn']

emptyValues = 
['Fred Davids', 42, false, 'January 1st, 2023, 5PM]
*/
