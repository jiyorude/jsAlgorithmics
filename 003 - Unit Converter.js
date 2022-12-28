/* 
CHALLENGE:
Create five 'unit converters'
*/

// OPTION 1: Kilometer to Miles converter

kmToMilesConverter = (kilometer) => {
  let miles = kilometer * 0.62137;
  console.log(miles.toFixed(2) + " miles");
};

kmToMilesConverter(250); // 155.34 miles
kmToMilesConverter(42); // 26.10 miles
kmToMilesConverter(4); // 2.49 miles
kmToMilesConverter(105); // 65.24 miles

// OPTION 2: Celsius to Kelvin Converter

celsiusToKelvin = (celsius) => {
  let kelvin = celsius + 273;
  console.log(kelvin + " degrees Kelvin");
};

celsiusToKelvin(33); // 306 degrees Kelvin
celsiusToKelvin(55); // 328 degrees Kelvin
celsiusToKelvin(-5); // 268 degrees Kelvin
celsiusToKelvin(10); // 283 degrees Kelvin

// OPTION 3: Days to Seconds Converter

daysToSeconds = (days) => {
  let seconds = days * 86400;
  console.log(`${days} days are equal to ${seconds} seconds!`);
};

daysToSeconds(0.5); // 0.5 days are equal to 43200 seconds!
daysToSeconds(7); // 7 days are equal to 604800 seconds!
daysToSeconds(2); // 2 days are equal to 172800 seconds!
daysToSeconds(5); // 5 days are equal to 432000 seconds!

// OPTION 4: Liters to Gallons Converter

litersToGallons = (liters) => {
  let gallons = liters / 3.8;
  console.log(gallons.toFixed(2) + " gallons!");
};

litersToGallons(5); // 1.32 gallons!
litersToGallons(2); // 0.53 gallons!
litersToGallons(4.5); // 1.18 gallons!
litersToGallons(25.1); // 6.61 gallons!

// OPTION 5: Ampere to Watts

ampToWatts = (amps, volts) => {
  let watts = amps * volts;
  console.log(watts + " watts!");
};

ampToWatts(5, 220); // 1100 watts!
ampToWatts(0.2, 120); // 24 watts!
ampToWatts(2, 230); // 460 watts!
ampToWatts(1.5, 220); // 330 watts!
