// let score = "22aaa"; // if we try to print the actual content in it then it will be NaN

// let score = null; // if we do this then the typeof will be an object and the converted value in Number will be 0

// let score = undefined; // if we do this then the typeof will be an undefined and the converted value in Number will be NaN

let score = true; // if we do this then the typeof will be an boolean and the converted value in Number will be 1(if the score was false then the converted value in number would be 0)
// console.log(typeof score);

let valueInNumber = Number(score);
// the type of the score in the line 1 will be a number though it has characters in it

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// ANYTHING TO NUMBER
/*
"33" => 33
false => 0, true => 
undefined => NaN
null => 0
*/

let isLoggedIn = true;
// let numberIsLoggedIn = Number(isLoggedIn);
// console.log(numberIsLoggedIn);  //output will be 1

let isLogged = 1;
let numberIsLogged = Boolean(isLogged);
// console.log(numberIsLogged); //output will be true

// ANYTING TO BOOLEAN
/*
1 => true, 0 => false
"" => false, "anything" => true
*/

let num = 66;
let convertedString = String(num);
console.log(convertedString); //the converted number will the same but it will be a string
console.log(typeof convertedString);
