/*
CHALLENGE:
Create a Roman Numeral Converter
*/

romanConverter = (num) => {
  // Although we won't be needing this, I've kept it in for reference purposes.
  const romObj = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  // Now empty let; will be replaced with the final result at the end.
  let result = "";

  // ERROR messages showing whenever someone tries to input a negative number and/or zero.
  // Numeric strings are allowed.

  if (num <= 0) {
    return "ERROR - PLEASE SPECIFY A NUMBER HIGHER THAN 0";
  }

  // Any number higher than 1 will be going through the if-else-if tree.

  /*
  Example: 35 
  Code goes all the way down to num >= 10 as it is higher than 10 but lower than 40. Adds a X to result. 
  10 is subtracted from the number, it is now 25. Since it is still higher than 10 but lower than 40,
  another X is added to the result. Another 10 is deducted from the number. Now there is 5 left.
  Since num isn't higher than 10 anymore, it drops down to the next else if statement, which is 5.
  It adds V to the result. Now the num is zero, which breaks the while loop.
  Result XXXV is returned.
  */

  while (num !== 0) {
    if (num >= 1000) {
      result += "M";
      num -= 1000;
    } else if (num >= 900) {
      result += "CM";
      num -= 900;
    } else if (num >= 500) {
      result += "D";
      num -= 500;
    } else if (num >= 400) {
      result += "CD";
      num -= 400;
    } else if (num >= 100) {
      result += "C";
      num -= 100;
    } else if (num >= 90) {
      result += "XC";
      num -= 90;
    } else if (num >= 50) {
      result += "L";
      num -= 50;
    } else if (num >= 40) {
      result += "XL";
      num -= 40;
    } else if (num >= 10) {
      result += "X";
      num -= 10;
    } else if (num >= 9) {
      result += "IX";
      num -= 9;
    } else if (num >= 5) {
      result += "V";
      num -= 5;
    } else if (num >= 4) {
      result += "IV";
      num -= 4;
    } else if (num >= 1) {
      result += "I";
      num -= 1;
    }
  }
  return result;
};

console.log(romanConverter(35)); // Returns XXXV
console.log(romanConverter(3548)); // Returns MMMDXLVIII
console.log(romanConverter(256)); // Returns CCLVI
console.log(romanConverter(24)); // Returns XXIV
console.log(romanConverter(7)); // Returns VII
console.log(romanConverter("7")); // Also returns VII
