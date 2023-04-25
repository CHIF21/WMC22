const number = 10; // number
const string = "Ein Text mit Leerzeichen"; // string
const boolean = true; // boolean
const nullVar = null; // null
const unVar = undefined; // undefined

const array = [2, 3, 4, 5]; // array
const stringArray = ["Das", "ist", "ein", "Text"];

console.log(number);
console.log(typeof unVar);

console.log(array);
array.forEach((num) => {
    console.log(num);
});

console.log(string);
console.log(string.toUpperCase());

const stringMap = stringArray.map((text) => {
    return text.toUpperCase();
})

console.log(stringMap);
// console.log(string.replace(/\s+/g, ""));
console.log(string.replaceAll(" ", ""));

let numbers = [];

for(let i = 1; i <= 100; i++) {
    numbers.push(i);
}

console.log(numbers);

const primNumbers = numbers.filter((num) => {
    let isPrime = true;
    for(let i = 2; i < num; i++) {
        if(num % i == 0) {
            isPrime = false;
        }
    }

    if(isPrime) {
        return num;
    }
});

console.log(primNumbers);

document.querySelector("#submit").onclick = (e) => {

    const testInput = document.querySelector("#test");
    const dateInput = document.querySelector("#date");

    console.log(testInput.value + " " + dateInput.value);

    if(testInput.value !== "" && dateInput.value !== "") {
        const date = new Date();
        const date2 = new Date(dateInput.value);
        const daysDiff = date2.getTime() - date.getTime();
        const daysLeft = Math.round(daysDiff / (1000 * 3600 * 24));
        console.log("Es verbleiben noch " + daysLeft + " Tage für den Test: " + testInput.value.toUpperCase());
    } else {
        alert("Bitte füllen Sie alle Felder aus!");
    }
}