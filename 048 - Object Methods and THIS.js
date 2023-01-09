/*
CHALLENGE:
Use object methods (functions as properties of objects)
and use 'this'
*/

let user = {
  name: "Jake",
  motto() {
    console.log("True determination will get you further in life than seeking for perfection ever will.");
  },
  age: 43,
  sayHi() {
    console.log("Howdy partner");
  },
  favoFood() {
    console.log("My favorite food is pizza!");
  },
};

user.favoFood();
// My favorite food is pizza!

console.log(user.name);
// Jake

user.motto();
// True determination will get you further in life...

user.sayHi();
// Howdy partner

// Using 'this':

let myPizza = {
  name: "perfect pepperoni",
  size: "medium",
  topping: "pepperoni",
  cheese: "mozarella",
  sauce: "secret tomato coriander sus",
  crust: "regular",
  bakePizza() {
    console.log(
      `You've ordered a ${this.name} ${this.size} pizza with a ${this.crust} crust covered with ${this.topping}, ${this.cheese} and ${this.sauce}. Enjoy.`
    );
  },
};

myPizza.bakePizza();
// You've ordered a perfect pepperoni medium pizza with a regular crust covered with
// pepperoni, mozarella and secret tomato coriander sus. Enjoy.
// Yes, the well known pizza example shown by Dave.

// It works because this.parameter looks at the parameter found in that specific object.
// You could use myPizza.name, but if we were to copy it to another variable or overwrite it
// JavaScript would proceed to most likely access the wrong object or property.

// 'this' is not bound at all and is tied to the scope of the objects they're used in.
// This could both be used in me and notMe without any interference and would take the name property of their respective object.

let me = { name: "Stitch" };
let notMe = { name: "Dr. Hamsterveil" };

function introduce() {
  console.log(`Hello. My name is ${this.name}!`);
}

me.func = introduce;
notMe.func = introduce;

me.func(); // Hello. My name is Stitch!
notMe.func(); // Hello. My name is Dr. Hamsterveil!

// Ladder object
// As seen in javascript.info

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().up().up().down().showStep().up().up().up().down().showStep();
// Both instances of showStep shows 3 and 5
