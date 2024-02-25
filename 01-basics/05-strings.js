const name = "bhaven";
const lastName = "rathod";

// console.log(name + lastName);// Not recommended

// console.log(`My name is ${name} ${lastName}`); //  string interpolation

const surname = new String("rathod"); //another way to declare string

// console.log(surname);
// console.log(surname.__proto__); // gets the prototype of the object

// console.log(surname.length);
// console.log(surname.toUpperCase);
// console.log(surname.charAt(2));
// console.log(surname.indexOf("r"));

// const str = surname.substring(0, 4); // negative values are not allowed
// console.log(str);
// const str1 = surname.slice(-5, 4); // negative values are allowed and negative starts form last index
// console.log(str1);

// const newStr = "    game     ";
// console.log(newStr);
// console.log(newStr.trim()); // eliminates white spaces and line terminators before and after string
// console.log(newStr.trimStart()); // eliminates white spaces and line terminators before string
// console.log(newStr.trimEnd()); // eliminates white spaces and line terminators before string

const website = "www.google.com";
console.log(website.replace("google", "bhaven"));
console.log(website.includes("gogole"));

console.log(website.split("o"));
console.log(website.padEnd(45, "foo")); //The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.
