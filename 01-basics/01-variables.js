const accountNo = 152;
var accountPassword = "bhaven";
// var is not recommended to be used because of the problem of block scope and functional scope

let accountMail = "bhaven@gmail.com";
accountCity = "Pune"; // This is not a good practice
let accountId; // If we try to print this then we get the output as 'undefined' because there is no value assigned to it

// accountNo = 65;  This gives TypeError since the variable is declared as constant
accountPassword = "rathod";
accountMail = "rathod@gmail.com";
accountCity = "Mumbai";

console.log(accountNo);
console.table([accountPassword, accountMail, accountCity, accountId]);
// console.table is a method to print multiple variables in a table format
