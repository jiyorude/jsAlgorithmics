/*
CHALLENGE:
Create a Caesar Cipher
In a CC, the meanings of letters are shifted by a set amount.
A modern use of this is the ROT13 cipher, where values of letters are shifted by 13 places.
*/

let cipherLookup = {
  // Look-up index which tells JavaScript which letter should resemble which on in the cipher.
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
};

rot13Decoder = (strEncoded) => {
  // Splits the given string and assigns it to codeSplit
  let codeSplit = strEncoded.split("");
  // Returns the final result eventually
  let decoded = [];
  // The decoded Array contains a map function, which checks the property of the letter
  // with the newly assigned letter inside the cipher and replaces/maps the given characters into ROT13
  decoded = codeSplit.map(function (letter) {
    if (cipherLookup.hasOwnProperty(letter)) {
      letter = cipherLookup[letter];
    }
    return letter;
  });
  // Now Decoded is an array of separate characters. With join, we add them together to a single string.
  return decoded.join("");
};

// As you can see, it is able to both encode and decode from and to ROT13

console.log(rot13Decoder("I AM HUNGRY")); // V NZ UHATEL
console.log(rot13Decoder("FREE PIZZA")); // SERR CVMMN
console.log(rot13Decoder("V JNAAN CYNL N TNZR")); // I WANNA PLAY A GAME
console.log(rot13Decoder("YRGF TB OBJYVAT")); // LETS GO BOWLING
