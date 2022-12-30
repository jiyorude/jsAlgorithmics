/*
CHALLENGE:
Try to find specific elements within the array iceberg.
*/

let myArrayIceBerg = [
    ["shift", "pop", false, true, "karate", "tennis", 55, 22, 1005, "array"],
    [55, 22, 35, "method", [false, true, true, "yarn", "blue",["red", "black",["white",[5,[66, 98,["teddybear"]]]]]]],
    [false, false, true, ["strawberry", "orange", "mango",[98, 11, 12, 13,[50, 51,[52,[53,[56,[54,[560, 987,["how deep are we?"]]]]]]]]]],
    ["frozen", "unfrozen", "unshift", "indexOf", 235, 479, 330, 9875,["airplane", "train", false,[true,[99,["too deep", ["myName",["desk drawer", "french fries",["dog", "cat", 77, 78,[79]]]]]]]]],
    [false, false, true, true,["main",[1, 2, 4, false,[true,["pizza",["rose", "lilly", "cherry",["chocolate",[false, true,[5678, 901, 999, 345, 21,["ice cream"]]]]]]]]]]
];

// Challenge 1: Find tennis
// Challenge 2: Find teddybear
// Challenge 3: Find mango
// Challenge 4: Find how deep are we
// Challenge 5: Find desk drawer
// Challenge 6: Find 79 in the depths of the iceberg
// Challenge 7: Find the secret bar of chocolate.


for (let x = 0; x < myArrayIceBerg.length; x++) {
  for (let j = 0; j < myArrayIceBerg[x].length; j++) console.log(x, j, myArrayIceBerg[x][j]);
}
// This loop prints the location of each of the items in the array.

let findTennis = myArrayIceBerg[0][5]
let findTeddy = myArrayIceBerg[1][4][5][2][1][1][2];
let findMango = myArrayIceBerg[2][3][2];
let findDepth = myArrayIceBerg[2][3][3][2][1][1][1][1][2];
let findDesk = myArrayIceBerg[3][8][3][1][1][1][1][0];
let findSeventyNine = myArrayIceBerg[3][8][3][1][1][1][1][2][4][0];
let findSecretCandy = myArrayIceBerg[4][4][1][4][1][1][3][0];


/* Fun fact:
Some items had to be found with the Developer's Console in Chrome as
they were too deeply nested into the iceberg for VSCode to properly find and call upon them.
Often they'd return undefined or simply state that there were 'more array's found', without any additional information.
*/