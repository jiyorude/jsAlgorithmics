/*
CHALLENGE:
Explain the logic behind these mathematical equations
*/

let testOne = 100 + 4 * 11;
//testOne = 144 as 4 * 11 + 100 = 144.
// Multiplying is considered higher-ranked than adding.

let testTwo = (100 + 4) * 11;
//testTwo = 1144 as 100+4 = 104 * 11 = 1144

let testThree = 25 + (3 + 5) + 5 * 3 - 24;
//testThree = 24 as 5*3 = 15, 3+5 = 8 = 23 + 25 - 24 = 24

let testFour = 99 - 24 + 56 / 2 + 8 * 4 + 2 - (3 - 2);
//testFour = 136 as 56/2 = 28. 8 * 4 = 32. 3-2 = 1.
// 99 - 24 + 28 + 32 + 2 - 1 = 136

console.log(testOne, testTwo, testThree, testFour);
// Logs 144, 1144, 24, 136
