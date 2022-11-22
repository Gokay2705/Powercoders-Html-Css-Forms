const me = {
  first: "Kyle",
  last: "Simpson",
  age: 39,
  specialties: ["JS", "Table Tennis"],
};

console.log(`My name is ${me.first}.`);
console.log("-----------------------------------------------");
// typeof
console.log(typeof 42); // "number"
console.log(typeof "abc"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" -- oops, bug!
console.log(typeof { a: 1 }); // "object"
console.log(typeof [1, 2, 3]); // "object"
console.log(typeof function hello() {}); // "function"
console.log("-----------------------------------------------");
// an array is an iterable
var arr = [10, 20, 30];

for (let val of arr) {
  console.log(`Array value: ${val}`);
}
console.log("-----------------------------------------------");
// ... array icine kelimeyi tek tek atar.
var greeting = "Hello world!";
var chars = [...greeting];

console.log(chars);
console.log("-----------------------------------------------");
// entries ile indexnu ve deger yazdirma.
var arr = [10, 20, 30];

for (let [idx, val] of arr.entries()) {
  console.log(`[${idx}]: ${val}`);
}
console.log("-----------------------------------------------");
// Prototype
function Workshop(teacher) {
  this.teacher = teacher;
}
Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'prototype' a class?");
// Kyle Is 'prototype' a class?

reactJS.ask("Isn't 'prototype' ugly?");
// Suzy Isn't 'prototype' ugly?
console.log("-----------------------------------------------");
// class
class Workshop1 {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'class' a class?");
// Kyle Is 'class' a class?

reactJS.ask("Is this class OK?");
// Suzy Is this class OK?      ES6 clas
console.log("-----------------------------------------------");


