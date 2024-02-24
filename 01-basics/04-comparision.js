// console.log(2 > 2);
// console.log(2 >= 0);
// console.log(2 <= 2);
// console.log(2 != 2);
// console.log(2 == 1);

// console.log("2" > 1);
// console.log("02" > 1); // both will give true because the string automatically gets converted into the numbers and get compared

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
// the reason being that the == operator and the comparision operators(>, <, >=, <=) work differently and the null first gets converted into a number and then the comparision takes place

console.log("2" == 2); // outputs true
console.log("2" === 2); // outputs false
// the reason behind this is that the === operator does the strict checking of the data types along with the actual content in it
