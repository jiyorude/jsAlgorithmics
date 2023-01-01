/*
CHALLENGE:
Create a farm inventory app
as seen in Eloquent JavaScript
*/

zeroPaddedLabel = (num, label) => {
  let numString = String(num);
  while (numString.length < 3) {
    numString = "0" + numString;
  }
  console.log(`${numString} ${label}`);
};

farmInventory = (cows, chickens, pigs, sheep, horses) => {
  zeroPaddedLabel(cows, "Cows");
  zeroPaddedLabel(chickens, "Chickens");
  zeroPaddedLabel(pigs, "Pigs");
  zeroPaddedLabel(sheep, "Sheep");
  zeroPaddedLabel(horses, "Horses");
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
