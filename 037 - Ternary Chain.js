/*
CHALLENGE:
Create a chain of ternary operators and recreate
the same function with a Switch.
*/

// Ternary Chain

ternaryChain = (num) => {
  let myNum = num;
  let result = "";
  myNum === 0
    ? (result = "Your number is zero")
    : myNum <= 10
    ? (result = "Your number is equal or lower than ten")
    : myNum <= 20
    ? (result = "Your number is equal or lower than 20")
    : myNum <= 30
    ? (result = "Your number is equal or lower than 30")
    : myNum <= 40
    ? (result = "Your number is equal or lower than 40")
    : myNum <= 50
    ? (result = "Your number is equal or lower than 50")
    : (result = "Your number is higher than 50.");

  return result;
};

console.log(ternaryChain(550)); // Higher than 50
console.log(ternaryChain(24)); // Equal or lower than 30
console.log(ternaryChain(0)); // Your number is zero
console.log(ternaryChain(33)); // Equal or lower than 40

// Switch

switchChain = (num) => {
  let switchNum = num;
  let answer = "";

  switch (switchNum) {
    case 0:
      answer = "Your number is zero";
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      answer = "Your number is equal or lower than 10";
      break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
      answer = "Your number is equal or lower than 20";
      break;
    default:
      answer = "No input received / Or input too high!";
  }

  return answer;
};

// Made the switch until 20 since you probably know the drill already.

console.log(switchChain(33)); // No input / too high, since we are over 20
console.log(switchChain(3)); // Equal or lower than 10
console.log(switchChain(15)); // Equal or lower than 20
console.log(switchChain(20)); // Equal or lower than 20
console.log(switchChain(0)); // Zero
