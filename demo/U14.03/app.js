let items = [];

function writeItems() {
    localStorage.setItem("items", JSON.stringify(items));
}

function readItems() {
    items = JSON.parse(localStorage.getItem("items")) || [];

    items.forEach(element => {
        const listItem = document.createElement("li");
        listItem.textContent = element;
        document.querySelector("#items").appendChild(listItem);
    })
}

function deleteItems() {
    localStorage.clear("items");
}

document.querySelector("#myButton").onclick = (e) => {
    const item = (Math.random() + 1).toString(36).substring(7);
    items.push(item);

    const listItem = document.createElement("li");
    listItem.textContent = item;
    document.querySelector("#items").appendChild(listItem);
    writeItems();
}

document.querySelector("#delButton").onclick = (e) => {
    document.querySelector("#items").innerHTML = "";
    deleteItems();
}

readItems();