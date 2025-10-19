const add = require('./modules/add.js');
const subtract = require('./modules/subtract.js');
const multiply = require('./modules/multiply.js');
const divide = require('./modules/divide.js');

const a = 20;
const b = 5;

console.log("Addition:", add(a, b));
console.log("Subtraction:", subtract(a, b));
console.log("Multiplication:", multiply(a, b));
console.log("Division:", divide(a, b));
