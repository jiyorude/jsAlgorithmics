/*
CHALLENGE:
Explain the result of the following code:
*/


// Example 1:
let myBike;
console.log(myBike ?? "No Bike");


// Example 2:
let myDinner = "Hamburgers"
console.log(null ?? myDinner);


// Example 3:
console.log(undefined ?? null)


// Example 4:
console.log(null ?? undefined);


// Example 5:
let myName = undefined;
let mySecondName = null;
let myNickName = "1337H4X0R";

console.log(myName ?? mySecondName ?? myNickName);


/*
Example 1:
It returns No Bike. let myBike is not defined.
If the first variable is not defined, var B will instantly be returned.

Example 2:
The first function is null, which is treated as undefined.
It returns myDinner.

Example 3:
It treats both undefined and null as undefined variables.
Since the first one cannot be returned, it automatically returns the second one.

Example 4:
Idem dito. Just because the parameters are swapped means it returns undefined this time.

Example 5:
Returns 1337H4X0R simply because its the first truly defined let in this range.
*/