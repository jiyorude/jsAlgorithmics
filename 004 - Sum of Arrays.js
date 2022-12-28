/*
CHALLENGE:
Get the sum of three different arrays
*/

// OPTION 1: Standard Integer Array

const intArray = [45, 99, 22, 98, 10, 23];

const reduced = intArray.reduce(
    (acc, val) => acc + val
);

console.log(reduced); // Logs 297, the total sum of the array


// OPTION 2: Negative Integer Array

const negArr = [-24, -55, -2, -10, -55];

const negReduced = negArr.reduce(
    (acc, val) => acc + val
);

console.log(negReduced); // Returns -146


// OPTION 3: Decimal Array

const floatArray = [50.253, 1.5221, 7.298, 76.3, 100.5555, 42.61235]

const floatReduced = floatArray.reduce(
    (acc, val) => acc + val
);

console.log(floatReduced.toFixed(2)); // Returns 278.54