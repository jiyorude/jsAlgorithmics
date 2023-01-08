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
