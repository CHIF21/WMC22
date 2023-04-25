// Remove
const firstHead = document.querySelector("#firstHeading");
firstHead.remove(); // .innerHTML = "";

// Parent element
console.log(document.querySelector("#item1").parentElement);

// Children
console.log(document.querySelector("#myList").childElementCount);
console.log(document.querySelector("#myList").childNodes);
console.log(document.querySelector("#myList").lastElementChild);
console.log(document.querySelector("#myList").firstElementChild);

// Text content -> every Tag
console.log(document.querySelector("#item1").textContent);
console.log(document.querySelector("#myList").textContent);

// Inner Text -> only human readable
console.log(document.querySelector("#item1").innerText);
console.log(document.querySelector("#myList").innerText);

// Inner HTML -> HTML
console.log(document.querySelector("#item1").innerHTML);
console.log(document.querySelector("#myList").innerHTML);

// Value
console.log(document.querySelector("#mainInput").value);

// Create an element
const item6 = document.createElement("li");
item6.setAttribute("id", "item6");

item6.className = "myClass";
item6.classList.add("bold");

item6.textContent = "Item 6";
item6.innerHTML = "This is some <strong>bold</strong> text";
document.querySelector("#myList").insertBefore(item6, document.querySelector("#item5"));

console.log(item6);

document.querySelector("#item1").style = "color: red";