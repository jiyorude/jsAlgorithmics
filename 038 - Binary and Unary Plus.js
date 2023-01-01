/*
CHALLENGE:
Explain what is going on in the following situations:
*/

// #1
// What happened to let b?
let b = 35;
b = -b;

// let b has transformed to a negative value. b is now -35


// #2
// What is the value of let s?
let s = "true" + "false";

// The value of let s is now truefalse as both strings are now concatenated.


// #3
// How does JavaScript behave in situations like this?
let add = "1" + 5 + "2";
let addTwo = 2 + 2 +"2";

// add has the value of 152. If you log add with typeof, all of the values have transformed into a string.
// addTwo has the value of 42. 2 + 2 is 4. The 2 is added after the 4 and everything is transformed into string data.

  
// #4
// What are the values of true, false and "" ?
+true;
+false;
+""

// True has a value of 1 as it is a positive value. False and "" are considered negatives and have an initial value of 0.


// #5
// What is the value of total?
let cars = 5;
let parkingSpots = 7;
let total = cars + parkingSpots;

// The value of total is 12. The values of both lets are added together, resulting in 12.


// #6
// What is the value of totalTwo?

let buses = "5";
let busSpots = "13";
let totalTwo = +buses + +busSpots;

// The value is 18. With the + in front of both lets, their values are converted to numbers.
// String 13 and string 5 become number 13 and number 5. 13 + 5 = 18

// # 7
// What are the values of d, e and f?

let d, e, f;
d = e = f = 2 * 5;

// Each value is 10. 
// it states f = 2*5. e = f, and d = f. The equation is linked to all three lets, thus the same outcome.

// #8
// What is the difference between numbers++ and ++numbers?

let numbers = 0;
numbers++;
++numbers;

// In hindsight, not much. But if we were to directly use the result of ++:
// ++numbers would directly increase the value and make it available for use
// numbers ++ will increment a value but use its previous value.