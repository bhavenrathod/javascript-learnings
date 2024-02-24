"use strict"; // This line treats all JS code as newer version. Though now-a-days we don't need to write it the file
//alert(3 + 3) This would normally give a popup in browser answering 6 but since we are using nodejs here we get an ReferenceError

/* 2 main doumentations for javascript
https://tc39.es/ecma262/
https://developer.mozilla.org/en-US/
*/

/***************DATA TYPES******************/
// 1. PRIMITIVE OR CALL BY VALUE DATA TYPES
/*
string => " "
number => 2^53 
bigInt
boolean => true / false
undefined => it means that no value is assigned to the variable
null => it is a standalone value
symbol => it is used to identify the uniqueness of the component
object
*/
// 2. NON-PRIMITIVE OR CALL BY REFERENCE DATA TYPES
/*
arrays 
objects
functions
*/

// let name = "bhaven";
// let age = 21;
// let isLoggedIn = true;
// let state;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isLoggedIn);
// console.log(typeof state); //the output will be undefined
// console.log(typeof null); // the output will be object

const id = Symbol("123");
const id1 = Symbol("123");
console.log(id === id1); // outputs false because of the unique symbols returned to the variable
