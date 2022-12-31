/*
CHALLENGE:
Explain the result of the following || and && operators
*/

let logicOpOne = null || undefined;
// It will return undefined. null cannot be converted to true and thus sees undefined as a backup value.

let logicOpTwo = "Barry" || "Andrew";
// It will return Barry. As the first value can be converted into a boolean, it skips over the second value

let logicOpThree = 0 || NaN;
// It returns NaN. 0 is considered false, so it chooses NaN as the fallback value.
// In this case, it does not matter that NaN is also considered a 'false' value. It is chosen simply because it's the fallback value.

let logicOpThreePartTwo = 0 || NaN || 2;
// Now 2 is returned. 0 is considered false, NaN as well. 2 is the first possible true value, so it returns 2.
// If 2 were to be false somehow, it would also return 2 due to it being the final fallback value.

let logicOpThreePartThree = 0 || NaN || 2 || "";
// 2 is returned as well, but now it stops looking at 2. The empty string is ignored because
// our true value has been found inside 2.

let logicOpFour = 0 || -1;
// Since the first value cannot be converted to true, it falls back on the second one.

let logicOpFive = "!!" || "?!";
// Returns !! as it can be considered to be true. ?! is therefore skipped.

let logicOpSix = "" || "!?";
// Returns ?! because an empty string is consdered false. Therefore it returns the fallback value.

let logicOpSeven = "!!" && 4;
// Returns 4. The first value cannot be converted to 'false'. It uses 4 as the fallback function.

let logicOpEight = false && 45;
// Returns false. The first value can be converted to false, since it is false.

let logicOpNine = true && 24 && -2 && false;
// Returns false since it is the very first false value in this circuit.
