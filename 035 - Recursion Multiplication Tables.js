/*
CHALLENGE:
Try to create a recursive function
*/

recursionTable = (num, multi) => {
  if (num === 11) {
    return "We've hit the end of the recursion table.";
  } else {
    console.log(`${num} x ${multi} = ${num * multi}`);
  }
  return recursionTable(num + 1, multi);
};

let num = 1;
console.log(recursionTable(num, 10));

/*
1 x 10 = 10
2 x 10 = 20
3 x 10 = 30
4 x 10 = 40
5 x 10 = 50
6 x 10 = 60
7 x 10 = 70
8 x 10 = 80
9 x 10 = 90
10 x 10 = 100
We've hit the end of the recursion table 
*/
