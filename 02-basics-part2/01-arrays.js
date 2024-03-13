// declaration
const myarr = [2, 9, 53, 74];

// const myarr2 = new Array(1, 34, 76, 84); // other method to declare
// console.log(myarr);
// console.log(myarr2);

// methods

// myarr.push(20); // adds element at the last
// myarr.push(30);
// console.log(myarr);
// myarr.pop(); // deletes the elements at the last

const removedElement = myarr.shift(); // removes the first element from an array and returns that removed element
// console.log(myarr);
// console.log(removedElement);

const newLength = myarr.unshift("hello"); // adds the specified elements to the beginning of an array and returns the new length of the array.
// console.log(newLength);

// console.log(myarr.includes(10)); //checks if the specifies element is present in an array or not
// console.log(myarr.indexOf(2)); // checks the index of the specified element

const newArr = myarr.join(""); //  creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string
const myNewArr = myarr.join("-");

// console.log(myarr);
// console.log(newArr); // outputs a string
// console.log(myNewArr); // outputs a string

const Array = [0, 1, 2, 3, 4, 5];
console.log("A - " + Array);

// slicing
console.log(Array.slice(1, 3));
console.log("B - " + Array);

// splice
console.log(Array.splice(1, 3)); // instances changes the contents of an array by removing or replacing existing elements and/or adding new elements
console.log("C - " + Array);
