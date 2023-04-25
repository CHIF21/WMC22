// Document Object Model (DOM)

// Select single element
const heading = document.getElementById("heading");
console.log(heading);

const anotherHeading = document.querySelector(".anotherHeading");
console.log(anotherHeading);

// Select single element by class
const myHeading = document.querySelector(".myHeading");
console.log(myHeading);

// Select multiple elements
const idHeads = document.querySelectorAll(".item1");
console.log(idHeads);

// Select an html element
const div1 = document.querySelectorAll("div.myText");
console.log(div1);