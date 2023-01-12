/*
CHALLENGE:
Show various ways of destructuring Objects and Arrays
as seen on JavaScript.info
*/

let fruitArray = ["Strawberries", "Apples", "Pears"];

// Destructures into:

let [fruitOne, fruitTwo, fruitThree] = fruitArray;

console.log(fruitTwo); // Returns apples
console.log(fruitThree); // Returns pears

// Destructuring does not affect the original array. It just copies it into variables and makes it easier to access/shorter to write:

console.log(fruitArray); // Still works!
// [ 'Strawberries', 'Apples', 'Pears' ]

// During destructuring, elements that are unwanted can be thrown out with comma's

let recordArray = ["Michael", "Jackson", "Album", "Thriller", "1982", "Epic Records"];

// Let's assume we want to destructure MJ and Thriller. We do not need to specify it's an album, neither its releasedate.

let [firstName, lastName, , albumName] = recordArray;

console.log(albumName); // Returns Thriller, we skipped 'album'. If we didn't add the extra comma, it would return album instead.
console.log(firstName, lastName, albumName); // Michael Jackson Thriller

// By default, destructuring stops at the last value. The rest is ignored. If we wanted to add the remaining things, we'd do it like this:

let [newFirstName, newLastName, , newAlbumName, ...remaining] = recordArray;

console.log(remaining); // Returns 1982, Epic Records as intended.

// Swapping also works:

let nameOne = "Peter";
let nameTwo = "deWitt";

console.log(nameOne, nameTwo); // Peter deWitt

[nameOne, nameTwo] = [nameTwo, nameOne];

console.log(nameOne, nameTwo); // deWitt Peter

// Destructuring also works with objects:

let myMenu = {
  coffee: 3.5,
  tea: 2.75,
  cappuccino: 3.75,
  applePie: 2.5,
  sandwich: 4.25,
};

let { coffee, tea, cappuccino } = myMenu;

console.log(coffee); // Returns 3.50
console.log(cappuccino); // Returns 3.75

// By default the destructured key has to be equal to the key specified in the object.
// You can change this however:

let { coffee: itemOne, tea: itemTwo, cappuccino: itemThree } = myMenu;

console.log(itemThree); // Now returns the value of cappuccino

// Let's finish with nested destructuring:

let myFridge = {
  general: {
    running: true,
  },
  items: ["carrots", "donuts"],
  itemsinFreezer: false,
};

let {
  general: { running },
  items: [fridgeItemOne, fridgeItemTwo],
  ...extra
} = myFridge;

console.log(extra); // itemsInFreezer: false
console.log(running); // True

// Works!
