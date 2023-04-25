// Object Literals
const student = {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    subjects: ["WMC", "POS", "GGP"],
    address: {
        street: "Grazerstrasse",
        number: 42,
        city: "Kaindorf"
    },
};

console.log(student.firstName, student.lastName);
console.log(student.subjects[1]);

student.class = "2CHIF";
student.id = 2375239089;
console.log(student);

// Shopping list
const shopping = [
    {
        id: 1,
        product: "apples",
        isDone: true
    },
    {
        id: 2,
        product: "bread",
        isDone: true
    },
    {
        id: 3,
        product: "iPhone 15 Ultra",
        isDone: false
    }
];

console.log(shopping);

// Only print iPhone 15 Ultra
console.log(shopping[2].product);

// Read-Only Objects
const readObject = {
    message: "Can't edit me!"
}
Object.freeze(readObject);
console.log(readObject.message);
readObject.id = 0; // Kein Error!

// Shallow vs. Deep
const object = {};
const newObject = object;
console.log(object !== newObject);

// Objects As Primitives
const result = 1 + new Number(14);
console.log(result);

// Object vs. Map
const objMap = {};
const map = new Map();