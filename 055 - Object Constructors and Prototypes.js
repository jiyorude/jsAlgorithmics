/*
CHALLENGE:
Explore and explain other features found in Object Oriented Programming
*/

// CONSTRUCTOR FUNCTIONS

// Constructors functions are functions that define new objects. They're blueprints for the creation of new objects.
// They're similar to classes.

function Dog(name, breed) {
  (this.name = name), (this.breed = breed), (this.numLegs = 4);
}

// For name and breed we allow for any input. For numLegs we standardize the input to be at 4.
// It means that any instance of Dog will have 4 legs as a standard.

let labrador = new Dog();
let golden = new Dog();

// We've created two instances of dog called labrador and golden.
// There's no properties defined as of yet.

labrador.name = "Joan";
labrador.breed = "Labrador Retriever";
labrador.numLegs = 3; // We override 4 legs to 3 legs.

golden.name = "Beau";
golden.breed = "Golden Retriever";
// Beau has 4 legs, so we don't need to specify numLegs.

// Let's log:

console.log(labrador);
// Logs: Joan, Labrador Retriever, 3

console.log(golden);
// Logs: Beau, Golden Retriever, 4

// There's also an easier way to define a new dog.

let shiba = new Dog("Hachi", "Shiba Inu");

console.log(shiba);
// Logs: Hachi, Shiba Inu, 4

// INSTANCE OF
// Instance of allows you to compare an object to its constructor, returning a boolean value whether it was created with the constructor

console.log(shiba instanceof Dog);
// We're asking JavaScript, is let shiba an instance of the Dog class?
// Yes, since we defined let shiba to be a new Dog. Thus 'true' is returned.

// let's try something obviously false:

function Mouse(name, breed) {
  (this.name = name), (this.breed = breed);
}

console.log(labrador instanceof Mouse);
// Obviously logs false. Labrador is not a child of the Mouse class.
// It was created as a new Dog: a child of the Dog class.

// OBJECT PROTOTYPES
// Prototypes are blueprints for objects. Properties defined in prototype are shared among all instances of a class

/*
function Dog(name, breed) {
    this.name = name, 
    this.breed = breed,
    this.numLegs = 4 
};
*/

// This is the dog constructor function we declared earlier.

console.log(shiba.bestFriend, golden.bestFriend, labrador.bestFriend);
// It should return undefined three times.

Dog.prototype.bestFriend = "Humans";
// This adds a prototype (a blueprint) property to all instances of Dog.
// If we were to log all instances of Dog, so shiba, labrador and golden, bestFriend should be there

console.log(shiba.bestFriend, golden.bestFriend, labrador.bestFriend);
// Now it returns humans, humans, humans

console.log(Object.hasOwn(shiba, "bestFriend"));
// Returns false, which means that shiba, as an object, does not have bestFriend as a own property.
// This means it has not been declared on the object itself, only in general as a prototype on all instances of Dog. This is why if you log shiba as a whole, bestFriend does not show.

console.log(Object.hasOwn(Dog.prototype, "bestFriend"));
// Returns true, it has been a property that was defined by the prototype or the function serving as the blueprint.

console.log(Dog.prototype);
// Shows bestFriend: Humans. Because this property was purely defined on the prototype instance of Dog.

// If we were to do the following:

shiba.bestFriend = "Humans";
// We'd manually add the property to the object itself.

console.log(shiba);
/*
Dog {
  name: 'Hachi',
  breed: 'Shiba Inu',
  numLegs: 4,
  bestFriend: 'Humans'
};
*/

console.log(golden);

/*
Dog { 
    name: 'Beau', 
    breed: 'Golden Retriever',
    numLegs: 4
};
*/

// As a prototype value, the value of bestFriend only show inside the Dog prototype.
// In the previous example, we added bestFriend to shiba's object itself, so now it only shows on the properties of the Shiba object.

// SUPERTYPES AND INHERITANCE
// You should first make a widely defined object that encompasses all others. This is your supertype.
// For example, if you wanted to create classes such as dog, cat, bird. It would be common to call your supertype Animal.
// Or, with strawberry, orange and apple. Your supertype would be fruits. Let's do fruits next.

function Fruits() {}

Fruits.prototype = {
  constructor: Fruits,
  name: this.name, // Name of the fruit
  kind: this.kind, // Kind/breed of fruit
  color: this.color, // Color of the fruit
};

// This is our supertype which encompasses all others.

// Let's make a instance of Fruits called Citrus Fruits.

function citrusFruits() {}

citrusFruits.prototype = Object.create(Fruits.prototype);
citrusFruits.prototype.constructor = citrusFruits;

citrusFruits.prototype.kind = "Citrus Fruit";
// Now we have defined the kind to be Citrus Fruit.

console.log(citrusFruits.prototype);
// Only kind: Citrus Fruit shows up because it's the only thing we've defined.

// Let's create a new instance of citrus Fruit

let orange = new citrusFruits();
orange.name = "Orange";
orange.color = "Uhm. Orange!";

console.log(orange.kind); // Citrus Fruits

// If we were to log orange in itself, it wouldn't show the kind, because
// the object only logs values and properties defined at an object level, not at prototype level.

console.log(orange);

// Let's finish by using IS PROTOTYPE OF to understand prototypal inheritance

console.log(Fruits.prototype.isPrototypeOf(citrusFruits.prototype));
// If the prototype of 'fruits' is used/inherited as a prototype for the prototype of citrusFruits, then return true.
// Console logs 'true' as citrusFruits was declared as a porotype of fruits. It inherited all of the properties upon creation.
// Fruits > citrusFruits > orange. Orange is a child of citrusFruits, and citrusFruits is a child of Fruits. Fruits is the supertype in this case.

let proto = Object.getPrototypeOf(orange);

console.log(proto);

/*
Fruits { constructor: [Function: citrusFruits], kind: 'Citrus Fruit' }
*/

// Shows the prototype values of Orange, these being kind: "Citrus Fruit"
