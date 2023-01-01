/*
CHALLENGE:
Create a farm inventory app
as seen in Eloquent JavaScript
*/

zeroPaddedLabel = (num, width) => {
  let numString = String(num);
  while (numString.length < width) {
    numString = "0" + numString;
  }
  return numString;
};

farmInventory = (cows, chickens, pigs, sheep, horses) => {
  console.log(zeroPaddedLabel(cows, 3) + " Cows");
  console.log(zeroPaddedLabel(chickens, 3) + " Chickens");
  console.log(zeroPaddedLabel(pigs, 3) + " Pigs");
  console.log(zeroPaddedLabel(sheep, 3) + " Sheep");
  console.log(zeroPaddedLabel(horses, 3) + " Horses");
};

farmInventory(12, 55, 9, 10, 3);

/* 
Returns
012 Cows
055 Chickens
009 Pigs
010 Sheep
003 Horses
*/
