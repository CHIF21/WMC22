// --- Unterricht vom: 24.01.2023---

// alert("Hello 2CHIF");

// // Log some information
// console.log("This is some info.");

// // Log some error
// console.error("This is a error!");

// // Log some warnings
// console.warn("WARNING!!??!?!?");



let num = 30;
console.log(num);

num = 50;

const count = 10;
// count = 20; // not possible

// Good idea: Use always const, unless you will reassign a variable.

// const myName = "Adrian";
// const age = "16";
// const sal = "11200.00";

// console.log(typeof myName);
// console.log(typeof age);
// console.log(typeof sal);

// const x = null;
// const y = undefined;
// let z;

// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// console.log("My name is " + myName + " and I am " + ae + " years old!");
// console.log(`My name is ${myName} and I am ${age} years old!`);

// const val = "POS, WMC, DBI, LOAL";
// console.log(val.split(", "));

const values = ["Adrian", 16, true];
// console.log(values[0]);

values[3] = "Johannes";
values.push("Anna"); // fügt hinten an
values.unshift("Thomas"); // fügt vorne an

// values.pop(); // löscht von hinten
// values.shift(); // löscht von vorne
// delete values[1]; // es löscht den Wert, aber nicht das Feld

console.log(values);

console.log(values.splice(1, 3));

console.log(values);

console.log(Array.isArray("Hallo"));
console.log(Array.isArray(values));

console.log(values.length);