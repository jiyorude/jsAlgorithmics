/*
CHALLENGE:
Explain 'try', 'catch', 'throw' and 'finally'
*/

// try... catch allows us to try code blocks and catch errors. We can also specify custom errors.

// TRY -  we specify the function or code we'd like to run.
// CATCH -  we specify what JavaScript should return if the code were to fail. Instead of just dying or giving a generic error, the code will return this instead.
// FINALLY -  This code will execute no matter what. It doesn't matter if try or catch work. Finally will always be returned.
// THROW -  allows you to create custom errors.

// First, let's create a try with an obvious mistake:

try {
  console.log("CODE WILL EXECUTE NOW!");
  cwonsole.log("Hello There!");
} catch (error) {
  console.log("Your code did not execute"); // This will show if there's an error in the code; preventing JavaScript from properly executing it.
}

// Returns CODE WILL EXECUTE NOW. Your code did not execute.
// The first console log will be executed since it's correct. But did you see the typo in Hello there?
// The code couldn't execute properly and therefore the catch was logged instead.
// Let's do it good this time.

try {
  console.log("CODE WILL EXECUTE NOW!");
  console.log("Hello There!");
} catch (error) {
  console.log("Your code did not execute");
}

// Returns CODE WILL EXECUTE NOW! Hello There!
// JavaScript was able to fully execute the code block, so the catch was left alone.

// Let's use the same function one more time, but let's add a finally call to it. The finally call will always be called after try and/or catch.

try {
  console.log("CODE WILL EXECUTE NOW!");
  cwonsole.log("Hello There!");
} catch (error) {
  console.log("Your code did not execute");
} finally {
  console.log("If your code was succesfull, you should see 'Hello There'. Otherwise the code hasn't executed.");
}

/*
CODE WILL EXECUTE NOW.
Your Code did not execute.
If your code was succesfull, you should see Hello There. Otherwise, the code hasn't executed.
*/

// No matter if try or catch was triggered, finally will always execute.

// Another example, a function where only number 4 will make the code run in its entirety.
// This time, let's add throw and finally as well. This example is based on an example found on W3 schools, but further expanded upon.

onlyFour = (num) => {
  let x = num;

  try {
    if (x === true || false) throw "No Booleans. Only Numbers, please!";
    if (isNaN(x)) throw "You didn't give me a number.";
    x === Number(x);
    if (x < 3) throw "Too Low!";
    if (x > 4) throw "Too High!";
  } catch (error) {
    console.log(`The code didn't execute. The reason is: ${error}.`);
  } finally {
    console.log("If you called the function with the number 4, then it should show up underneath");
  }

  if (x === 4) {
    return x;
  } else {
    return "";
  }
};

/*
We call the function and specify a number. String numbers are also accepted. The function will only return the value of x if x corresponds with 4.
Otherwise it will return a empty string. If the user specified 4 inside the function, x, or 4 in this case, will be returned after the finally call.

If it is not 4, but a higher or lower number, a NaN or a boolean, the function will trigger a throw error inside the try section of the code. 
Once the error is triggered, the catch code will execute together with the triggered error.

If 4 was not specified, the catch code will execute together with finally and thats it. X will not be returned at the end because it was not specified as 4. The if statement will return a empty string instead.
If 4 was specified, the catch code and all of the throws will be ignored. It will go straight to the finally call and return x through the if-else statement.
*/

// Let's test it out!

console.log(onlyFour("HEY!!!!!"));
// The code didn't execute. The reason is: You didn't give me a number.
// After that, the finally call executes, but since input was not 4, a empty string is logged under finally

console.log(onlyFour("01"));
// The code didn't execute. The reason is: Too Low.
// After that, the finally call executes, but since input was not 4, a empty string is logged under finally.

console.log(onlyFour(02));
// The code didn't execute. The reason is: Too High
// After that, the finally call executes, but since input was not 4, a empty string is logged under finally.

console.log(onlyFour(8));
// The code didn't execute. The reason is: Too High
// After that, the finally call executes, but since input was not 4, a empty string is logged under finally.

console.log(onlyFour(4));
// Directly goes to the finally call. After the finally call, x, which is 4, is logged underneath:

/*
If you called the function with the number 4, then it should show up underneath
4
*/

console.log(onlyFour(true));
// The code didn't execute. The reason is: No Booleans. Only numbers!
// After that, the finally call executes, but since input was not 4, a empty string is logged under finally.
