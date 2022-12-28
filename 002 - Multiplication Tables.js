/* 
CHALLENGE:
Recreate multiplication tables in Javascript.
Start from 1 and work up till 10.
*/

// OPTION 1: for-loops and logging template literals

for (let x = 1; x <= 10; x++) {
  console.log(
    `\nTABLE OF ${x}: 
    1 x ${x} = ${1 * x}
    2 x ${x} = ${2 * x}
    3 x ${x} = ${3 * x}
    4 x ${x} = ${4 * x}
    5 x ${x} = ${5 * x}
    6 x ${x} = ${6 * x}
    7 x ${x} = ${7 * x}
    8 x ${x} = ${8 * x}
    9 x ${x} = ${9 * x}
    10 x ${x} = ${10 * x}`
  );
}

// OPTION 2: for-loop ception

// i = index,
// m = multiplier

for (let i = 1; i <= 10; i++) {
  for (m = 1; m <= 10; m++) {
    console.log(`
    ${i} x ${m} = ${i * m}`);
  }
}
