const score = 20;
// console.log(score);

const score1 = new Number(50.5896);
// console.log(score1);
// console.log(score1.toFixed(1)); // rounds off the integer till the specified decimal(here 1)
// console.log(score1.toPrecision(1)); // returns a string representing this number to the specified precision

const bigNum = 100000;
// console.log(bigNum.toLocaleString()); // makes the number more readable by adding commas
// console.log(bigNum.toLocaleString("en-UK")); // makes the commas according to the specified standards

/**********************MATH*************************/

// console.log(Math.abs(-96)); // gives the absolute value
// console.log(Math.round(6.2));
// console.log(Math.ceil(6.2)); // gives the next absolute value
// console.log(Math.floor(6.2)); // gives the previous absolute value
// console.log(Math.min(4, 5, 2, 8, 1)); // gives the min value among the array
// console.log(Math.max(4, 5, 2, 8, 1)); // gives the max value among the array

console.log(Math.random()); // gives random value between 0 and 1
console.log([Math.random() * 10] + 1); // shift a decimal place and 1 is added if the generated number is less the 0
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // generates the number between the specified values
