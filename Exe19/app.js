const api_key = "";

async function getRecipes(recipeArray) {
    console.log(recipeArray);
    const recipes = [];

    const fetchPromises = recipeArray.map((element) => {
        return fetch(`https://api.spoonacular.com/recipes/${element.id}/information?apiKey=${api_key}&query`)
            .then(res => res.json())
    });

    await Promise.all(fetchPromises)
        .then(data => {
            recipes.push(...data);
        })
        .catch(err => {
            throw new Error(err);
        });

    return recipes;
}

function setRecipe(recipes) {
    let output = "<div class='row'>";
    recipes.forEach((recipe) => {
        output += `
            <div class='col-6'><div class='p-3'>
                <div class="card">
                    <img src="${recipe.image}" class="rounded" alt="card-horizontal-image" />
                    <div class="card-body">
                        <h5 class="card-title">${recipe.title}}</a></h5>
                        <p class="card-text text-left">${recipe.summary}</p>
                    </div>
                </div>
            </div></div>
        `;
    });
    output += "</div>";
    document.querySelector("#cards").innerHTML = output;
}

async function searchByIngredients(listOfIngredients) {
    return new Promise((resolve, reject) => {
        try {
            fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${listOfIngredients}&apiKey=${api_key}`)
                .then(res => res.json())
                .then(data => {resolve(data)});
        } catch(err) {
            reject("There was a problem by passing the list of ingredients");
        }
    });
}

function getSeletcedIngredients() {
    const ingredients = [];

    const ingredientsSelector = document.querySelector(".ingridients-selector");
    const selector = ingredientsSelector.querySelectorAll("input[type=checkbox]");
    selector.forEach((element, index) => {
        if(element.checked) {
            ingredients.push(element.id + (index < selector.length ? "," : ""));
        }
    });

    return ingredients;
}

async function searchByIngredients(listOfIngredients) {
    return new Promise((resolve, reject) => {
        try {
            fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${listOfIngredients}&apiKey=${api_key}`)
                .then(res => res.json())
                .then(data => {resolve(data)});
        } catch(err) {
            reject("There was a problem by passing the list of ingredients");
        }
    });
}

function getSeletcedIngredients() {
    const ingredients = [];

    const ingredientsSelector = document.querySelector(".ingridients-selector");
    const selector = ingredientsSelector.querySelectorAll("input[type=checkbox]");
    selector.forEach((element, index) => {
        if(element.checked) {
            ingredients.push(element.id + (index < selector.length ? "," : ""));
        }
    });

    return ingredients;
}

async function searchByNutrients(nutrient, value) {
    return new Promise((resolve, reject) => {
        try {
            fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${api_key}&${nutrient}=${value}`)
                .then(res => res.json())
                .then(data => {resolve(data)});
        } catch(err) {
            reject("There was a problem by passing the list of ingredients");
        }
    });
}

function getNutrients() {
    const ingredients = [];

    const ingredientsSelector = document.querySelector(".ingridients-selector");
    const selector = ingredientsSelector.querySelectorAll("input[type=checkbox]");
    selector.forEach((element, index) => {
        if(element.checked) {
            ingredients.push(element.id + (index < selector.length ? "," : ""));
        }
    });

    return ingredients;
}

async function searchByText(keyword) {
    return new Promise((resolve, reject) => {
        try {
            fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&query=${keyword}`)
                .then(res => res.json())
                .then(data => {resolve(data)});
        } catch(err) {
            reject("There was a problem by passing the list of ingredients");
        }
    });
}

function getText() {
    const value = document.querySelector(".text").value;

    if(value.length == 0) {
        return new Error("Please enter a keyword!");
    }

    return value;
}

document.querySelector("#searchByIngredients").onclick = async () => {
    try {
        const ingredients = getSeletcedIngredients();
        const recipeByIngredients = await searchByIngredients(ingredients);
        const recipes = await getRecipes(recipeByIngredients);
        setRecipe(recipes);
    } catch(err) {
        console.log(err);
    }
}

document.querySelector("#searchByNutrients").onclick = async () => {
    try {
        const nutrients = getNutrients();
        const recipeByNutrients = await searchByNutrients(nutrients);
        const recipes = await getRecipes(recipeByNutrients);
        setRecipe(recipes);
    } catch(err) {
        console.log(err);
    }
}

document.querySelector("#searchByText").onclick = async () => {
    try {
        const text = getText();
        const recipeByText = await searchByText(text);
        const recipes = await getRecipes(recipeByText.results);
        setRecipe(recipes);
    } catch(err) {
        console.log(err);
    }
}
