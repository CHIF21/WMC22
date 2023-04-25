// --- Unterricht vom: 7.02.2023 ---
const someValues = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// forEach
someValues.forEach((val) => {
    console.log(val);
});

// JAVA
// for(int val : someValues) {}

// map
const mapArray = someValues.map((val) => {
    return val / 2;
});

console.log(mapArray);

// filter
const filterArray = someValues.filter((val) => {
    return (val % 10) == 0;
});

console.log(filterArray);

// combination
const filterMapArray = someValues.filter((val) => {
    return (val % 10) == 0;
}).map((val) => {
    return val * 100;
});

console.log(filterMapArray);

// function
// -> NO return type
// -> Parameters possible (just name!)
// function add(num1 = 0, num2 = 0) { // 0 -> default value!
//     console.log(num1 + num2);
// }

// Arrow-Function
const add = (num1 = 0, num2 = 0) => {
    console.log(num1 + num2);
}

add(2, 3);
add();
add(2);

// Functions with return values
// function addReturn(num1 = 0, num2 = 0) {
//     return num1 + num2;
// }

// Arrow functions with return values
const addReturn = (num1 = 0, num2 = 0) => num1 + num2;

console.log(addReturn(2, 8));
