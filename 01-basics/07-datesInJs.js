let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.getTimezoneOffset());

// Ways to manually create the date
// let myCreatedDate = new Date(2024, 1, 16); // only month starts with zero in js
// let myCreatedDate = new Date(2024, 1, 16, 5, 3); // with time in hh:mm:ss format
// let myCreatedDate = new Date("2024-01-16"); // to create in yyyy-mm-dd format - here month starts from 1 itself
let myCreatedDate = new Date("01-16-2024"); // to create in mm-dd-yyyy format
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // we get the timestamp in miliseconds
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myCreatedDate.getTime() / 1000)); // to convert into seconds

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay()); // day starts from 1 itself unlike month

// the .toLocaleString method defines an object and hence we can also define the parameters by our own
console.log(newDate.toLocaleString("default", { weekday: "long" }));
