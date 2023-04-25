// Classes in JS
class Person {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Create an object of the class
const person1 = new Person("Oliver", "Trummer", "12.05.1993");
// console.log(person1.firstName);
console.log(person1.getFullName());


// Click listener for button
const button = document.querySelector("#firstButton");

button.addEventListener("click", (e) => {
    
});

button.onclick = (e) => {
    console.log(e.target);
}

// Click listener for div
document.querySelector("#someText").onmouseenter = (e) => {
    console.log("Hello!");
}