/*
CHALLENGE:
Implement an optional chain inside an object.
*/

let userDatabasePrototype = {
  name: "name",
  address: {
    houseNumber: "houseNumber",
    street: "street",
  },
};

let jimmy = Object.assign({}, userDatabasePrototype);
let charlie = Object.assign({}, userDatabasePrototype);

jimmy.name = "Jimmy";
jimmy.address.street = "Pine Lake Drive";
jimmy.address.houseNumber = "1244";

console.log(jimmy);
// Jimmy. 1244. Pine Lake Drive

console.log(jimmy.address?.street);
// Logs Pine Lake Drive
// If property exist, it is logged. Otherwise null/undefined.

charlie.name = "Charlie";
delete charlie.address.street;
delete charlie.address.houseNumber;
delete charlie.address;

console.log(charlie);
// Charlie only, no further information available.

console.log(charlie.address.street);
// Gives an error!
// This means that we would be getting an error if other users were not to have any address information in our database!
// This would prevent us from iterating through our database if we wanted since our code stops at the first encountered error.

console.log(charlie.address?.street);
// Now with optional chaining, it checks for the property.
// It is not found, so undefined is returned instead as the property of address.street.
// This allows us to further iterate through our database if we wanted to without errors!
// It reassigned the empty value with undefined, which is a value; which in turn satisfies JavaScript and allows us to continue.
