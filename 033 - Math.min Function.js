/*
CHALLENGE:
Create a Math.min function
as seen in Eloquent JavaScript
*/

min = (valone, valtwo) => {
  return Math.min(valone, valtwo);
};

console.log(min(0, 10)); // Returns 0
console.log(min(0, -10)); // Returns -10

// or:

minTwo = (valone, valtwo) => {
  if (valone < valtwo) {
    return valone;
  } else {
    return valtwo;
  }
};

console.log(minTwo(25, 23)); // Returns 23
console.log(minTwo(0, 1)); // Returns 0
