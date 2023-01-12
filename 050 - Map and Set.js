/*
CHALLENGE:
Use the Map and Set structures
*/

// MAP
// In theory maps are similar to objects.
// The main difference is that Map allows keys of any type
// Objects only allow integers, strings and symbols

// Declaration of new map
let myMap = new Map();

// Sets keys and respective values
myMap.set("Boolean True", true);
myMap.set("Integer Value", 358);
myMap.set("String Value", "Hello!");
myMap.set("isAdmin Value", false);

// Gets the key and value
console.log(myMap.get("Boolean True")); // Returns true
console.log(myMap.get("String Value")); // Returns Hello!

// Checks if this key is present in the map and returns boolean value
console.log(myMap.has("isAdmin Value")); // Returns true - We have this value in our map
console.log(myMap.has("Integer Value")); // Returns true, we indeed have Integer Value in our map
console.log(myMap.has("Lasagna Value")); // Returns false, no lasagna here unfortunately.

// Now let's delete something from the map
// First, let's add lasagna value to the map.

myMap.set("Lasagna Value", 9001);
console.log(myMap.get("Lasagna Value")); // Returns over 9000. :)

console.log(myMap);

/*
Returns:

Map(5) {
    'Boolean True'
    => true,
    'Integer Value'
    => 358,
    'String Value'
    => 'Hello!',
    'isAdmin Value
    => false,
    'Lasagna Value'
    => 9001
}
*/

console.log(myMap.size); // Returns 5 items.

myMap.delete("Lasagna Value");

console.log(myMap.size); // Now returns 4 items!

console.log(myMap); // Now ends at isAdmin Value! Lasagna is gone.

// And finally, clear the entire map
myMap.clear();
console.log(myMap.size); // Map is now down to 0 items!

// Map Iteration
// With keys, values and entries, we can iterate over keys, values or both.

let groceryList = new Map();

groceryList.set("Packs of Cheese", 5);
groceryList.set("Sandwiches", 10);
groceryList.set("Cans of Chicken Soup", 2);
groceryList.set("Bottles of Water", 2);

console.log(groceryList); // Everything's in there. Good, let's continue.

console.log(groceryList.entries());

/*
[Map Entries] {
  [ 'Packs of Cheese', 5 ],
  [ 'Sandwiches', 10 ],
  [ 'Cans of Chicken Soup', 2 ],
  [ 'Bottles of Water', 2 ]
}
*/
// This is practically the same if we were to console log the map itself.

console.log(groceryList.keys());

/*
[Map Iterator] {
  'Packs of Cheese',
  'Sandwiches',
  'Cans of Chicken Soup',
  'Bottles of Water'
}
*/
// Only returns the keys themselves

console.log(groceryList.values());

/*
[Map Iterator] { 5, 10, 2, 2 }
*/
// Only returns the values of the keys that were set.

// This also works with for loops:

let groceryArray = [];

for (let grocery of groceryList.keys()) {
  groceryArray.push(grocery);
}

console.log(groceryArray);

/*
[
  'Packs of Cheese',
  'Sandwiches',
  'Cans of Chicken Soup',
  'Bottles of Water'
]
*/

console.log(groceryArray[2]); // Cans of Chicken Soup

const myFavoriteFood = groceryArray[1];
console.log(myFavoriteFood); // Sandwiches!

// for Each also works:

groceryList.forEach((value, key, map) => {
  console.log(`I need ${value} ${key}!`);
});

/*
I need 5 Packs of Cheese!
I need 10 Sandwiches!
I need 2 Cans of Chicken Soup!
I need 2 Bottles of Water!
*/

// Object.entries
// Creates a Map from an object

let userObj = {
  name: "David",
  age: 42,
};

let userMap = new Map(Object.entries(userObj));

console.log(userMap.get("age")); // Returns 42!

console.log(userMap);

/*
Map(2) { 'name' => 'David', 'age' => 42 }
*/

// Sets
// Sets only contain values, no keys, and each value may occur only once.

// Let's go back to the grocery list example.
// Let's pretend we are in the supermarket, and keep adding things in our basket
// The things we add to our basket are the things we are adding to our set

let grocerySet = new Set();

let cheese = "Pack of Cheese";
let sandwich = "Sandwich";
let soup = "Can of Chicken Soup";
let water = "Bottle of Water";

// Remember: we need 5 packs of cheese, 10 sandwiches, 2 cans of soup and 2 bottles of water.

grocerySet.add(cheese);
grocerySet.add(cheese);
grocerySet.add(cheese);
grocerySet.add(cheese);
grocerySet.add(cheese);
grocerySet.add(sandwich); // For the sake of DRY I'll just add 3 instead of 10 just to make my point
grocerySet.add(sandwich);
grocerySet.add(sandwich);
grocerySet.add(soup);
grocerySet.add(soup);
grocerySet.add(water);
grocerySet.add(water);

// Checking whether set contains value - responds with boolean value
console.log(grocerySet.has(water)); // True
console.log(grocerySet.has("liquorice")); // False (wrote it in a string in order to prevent a undefined error since liquorice as a variable hasn't been declared)

// Checks the size of the set.
console.log(grocerySet.size); // Logs 4. Although there are 11 items in the set, each item can only be logged once!

console.log(grocerySet);

/*
Set(4) {
  'Pack of Cheese',
  'Sandwich',
  'Can of Chicken Soup',
  'Bottle of Water'
}
*/

// Deleting something from the set
// Not really in the mood for soup anyway

grocerySet.delete(soup);

console.log(grocerySet.size); // Went from 4 to 3 items.

grocerySet.clear(); // Deletes everything from the set

console.log(grocerySet); // Returns set(0), containing 0 items.

// Just as with map, keys, values and entries can be used as iterators
// For loops work as well.

let userSet = new Set();

let dennis = "Dennis";
let dave = "Dave";
let danielle = "Danielle";

userSet.add(dennis);
userSet.add(dave);
userSet.add(danielle);

console.log(userSet.size); // 3 items, let's continue

for (let name of userSet) {
  console.log(`Hello, my name is ${name}!`);
}

// Hello, my name is Dennis!
// Hello, my name is Dave!
// Hello, my name is Danielle!

userSet.forEach((value, set) => {
  console.log(value);
});

// Dennis, Dave, Danielle

// In order to keep compatibility with Map, you'd have to add a second value in the forEach loop
// Then it would've been (value, valueTwo, set);

// One more example with Map.
// We create a map and transform it to an Array in order to push additional colors, which in turn we create a for loop to iterate through all the colors.

let colorMap = new Map([
  ["Yellow Color", "Yellow"],
  ["Red Color", "Red"],
  ["Blue Color", "Blue"],
  ["Green Color", "Green"],
]);

console.log(colorMap.size); // 4 items

// Let's convert it into an array. We want the values of the map.

let colorArray = Array.from(colorMap.values());

console.log(colorArray);
// [ 'Yellow', 'Red', 'Blue', 'Green']

pushColor = (color) => {
  return colorArray.push(color);
};

pushColor("Purple");
pushColor("Orange");
pushColor("Brown");

console.log(colorArray);
// Now logs ['Yellow', 'Red', 'Blue', 'Green', 'Purple', 'Orange', 'Brown']

for (let x = 0; x < colorArray.length; x++) {
  console.log(`Color number ${x} is ${colorArray[x]}.`);

  if (x === 6) {
    console.log(`That is the end of the list.`);
  }
}

/*
Color 0 is Yellow.
Color 1 is Red.
Color 2 is Blue.
Color 3 is Green.
Color 4 is Purple.
Color 5 is Orange.
Color 6 is Brown. 
That is the end of the list.
*/
