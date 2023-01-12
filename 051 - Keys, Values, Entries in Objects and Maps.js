/*
CHALLENGE:
Use keys, values and entries in Objects and Maps.
What is the difference between them?
*/

// The main differences:
// map.keys are iterable only. Object.keys/values/entries return a fully usable array

// Map example:

let myDailySchedule = new Map([
  ["Morning", "Coding"],
  ["Noon", "Lunch"],
  ["Afternoon", "Website Design"],
  ["Evening", "Learning JavaScript and React"],
  ["Night", "Sleeping like a champ"],
]);

let myDailyEntries = myDailySchedule.entries();

console.log(myDailyEntries);

/*
[Map Entries] {
  [ 'Morning', 'Coding' ],
  [ 'Noon', 'Lunch' ],
  [ 'Afternoon', 'Website Design' ],
  [ 'Evening', 'Learning JavaScript and React' ],
  [ 'Night', 'Sleeping like a champ' ]
}

// It just notes a overview of all entries. It is not an array.
*/

let myDailyEntriesArray = Array.from(myDailySchedule.entries);

console.log(myDailyEntriesArray);
// Returns an empty array.

// Now let's try it with an object

let myDailyScheduleObject = Object.fromEntries(myDailySchedule);

let myDefinitiveArray = Object.entries(myDailyScheduleObject);

console.log(myDefinitiveArray);

/*
[
  [ 'Morning', 'Coding' ],
  [ 'Noon', 'Lunch' ],
  [ 'Afternoon', 'Website Design' ],
  [ 'Evening', 'Learning JavaScript and React' ],
  [ 'Night', 'Sleeping like a champ' ]
]
*/

// Let's go one step further to prove it's an array

let myFavoriteActivity = myDefinitiveArray[4][1];
console.log(myFavoriteActivity); // Sleeping like a champ.

// We can access the properties!

for (let value of Object.values(myDailyScheduleObject)) {
  console.log(value);
}

/*
Coding
Lunch
Website Design
Learning JavaScript and React
Sleeping like a champ
*/

// One last example:
// We create an object with orders. The product has a set price of 4.50 euro.
// First we convert the object into an array. Then we use a loop with template literals to decide how much each customer has to pay.

let myOrderList = {
  Janine: 4,
  Zack: 3,
  Bob: 8,
  Charlie: 1,
  Joan: 7,
};

let myOrderArray = Object.entries(myOrderList);

console.log(myOrderArray);

orderSummary = () => {
  let price = 4.5;

  for (let x = 0; x < myOrderArray.length; x++) {
    let total = (myOrderArray[x][1] * price).toFixed(2);
    console.log(`${myOrderArray[x][0]} purchased ${myOrderArray[x][1]} products, which equals to ${total} euro.`);
  }
};

orderSummary();

/*
Janine purchased 4 products, which equals to 18.00 euro.
Zack purchased 3 products, which equals to 13.50 euro.
Bob purchased 8 products, which equals to 36.00 euro.
Charlie purchased 1 products, which equals to 4.50 euro.
Joan purchased 7 products, which equals to 31.50 euro.
*/

// If we were to raise prices to 6,35. We'd get this:

/*
Janine purchased 4 products, which equals to 25.40 euro.
Zack purchased 3 products, which equals to 19.05 euro.
Bob purchased 8 products, which equals to 50.80 euro.
Charlie purchased 1 products, which equals to 6.35 euro.
Joan purchased 7 products, which equals to 44.45 euro.
*/
