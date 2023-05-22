
// ***** Week selection cards *****

const selection = [
    {
        name: "Empanadas",
        description: "Un clásico, en versiones omnívora y veggie. Para preparar mil y congelar!",
        ingredients: [
            "12 tapas",
            "500 gr Cebolla",
            "500 gr Carne picada o Soja texturizada hidratada",
            "1 ají rojo o verde",
            "Comino C/N",
            "Pimentón dulce C/N",
            "Sal y pimienta C/N"
        ],
        directions: [
            "Rehogar la cebolla con el ají",
            "Cuando la cebolla se transparente, agregar la carne o soja",
            "Esperar a que la carne cambie toda de color y condimentar",
            "Dejar enfriar el relleno",
            "Rellenar las tapas y hacer el repulgue",
            "Mandar a horno fuerte 10-15 minutos o hasta que se doren"
        ],
        photoPaths: [
            "./images/empanadas-01.jpg",
            "./images/empanadas-02.jpg",
            "./images/empanadas-03.jpg"
        ]
    },
    {
        name: "Milanesas",
        description: "Sequitas y crocantes. Para disfrutar al plato o en un sánguche completo.",
        ingredients: [
            "500 gr Nalga cortada finamente",
            "25 gr Provenzal",
            "Una cucharada de mostaza",
            "3 huevos",
            "Pan rallado C/N",
            "Aceite C/N",
            "Sal y pimienta C/N"
        ],
        directions: [
            "Limpiar la carne y sacarle el exceso de grasa",
            "Marinarla con el huevo, sal, pimienta, mostaza y provenzal",
            "Ir pasándola por pan rallado, presionando bien para que se pegue",
            "Mandar un rato a la heladera con separadores",
            "Freir o cocinar al horno con un poco de aceite"
        ],
        photoPaths: [
            "./images/milas-01.jpg",
            "./images/milas-02.jpg",
            "./images/milas-03.jpg"
        ]
    },
    {
        name: "Empanadas",
        description: "Un clásico, en versiones omnívora y veggie. Para preparar mil y congelar!",
        ingredients: [
            "12 tapas",
            "500 gr Cebolla",
            "500 gr Carne picada o Soja texturizada hidratada",
            "1 ají rojo o verde",
            "Comino C/N",
            "Pimentón dulce C/N",
            "Sal y pimienta C/N"
        ],
        directions: [
            "Rehogar la cebolla con el ají",
            "Cuando la cebolla se transparente, agregar la carne o soja",
            "Esperar a que la carne cambie toda de color y condimentar",
            "Dejar enfriar el relleno",
            "Rellenar las tapas y hacer el repulgue",
            "Mandar a horno fuerte 10-15 minutos o hasta que se doren"
        ],
        photoPaths: [
            "./images/empanadas-01.jpg",
            "./images/empanadas-02.jpg",
            "./images/empanadas-03.jpg"
        ]
    },
    {
        name: "Milanesas",
        description: "Sequitas y crocantes. Para disfrutar al plato o en un sánguche completo.",
        ingredients: [
            "500 gr Nalga cortada finamente",
            "25 gr Provenzal",
            "Una cucharada de mostaza",
            "3 huevos",
            "Pan rallado C/N",
            "Aceite C/N",
            "Sal y pimienta C/N"
        ],
        directions: [
            "Limpiar la carne y sacarle el exceso de grasa",
            "Marinarla con el huevo, sal, pimienta, mostaza y provenzal",
            "Ir pasándola por pan rallado, presionando bien para que se pegue",
            "Mandar un rato a la heladera con separadores",
            "Freir o cocinar al horno con un poco de aceite"
        ],
        photoPaths: [
            "./images/milas-01.jpg",
            "./images/milas-02.jpg",
            "./images/milas-03.jpg"
        ]
    },
    {
        name: "Empanadas",
        description: "Un clásico, en versiones omnívora y veggie. Para preparar mil y congelar!",
        ingredients: [
            "12 tapas",
            "500 gr Cebolla",
            "500 gr Carne picada o Soja texturizada hidratada",
            "1 ají rojo o verde",
            "Comino C/N",
            "Pimentón dulce C/N",
            "Sal y pimienta C/N"
        ],
        directions: [
            "Rehogar la cebolla con el ají",
            "Cuando la cebolla se transparente, agregar la carne o soja",
            "Esperar a que la carne cambie toda de color y condimentar",
            "Dejar enfriar el relleno",
            "Rellenar las tapas y hacer el repulgue",
            "Mandar a horno fuerte 10-15 minutos o hasta que se doren"
        ],
        photoPaths: [
            "./images/empanadas-01.jpg",
            "./images/empanadas-02.jpg",
            "./images/empanadas-03.jpg"
        ]
    },
    {
        name: "Milanesas",
        description: "Sequitas y crocantes. Para disfrutar al plato o en un sánguche completo.",
        ingredients: [
            "500 gr Nalga cortada finamente",
            "25 gr Provenzal",
            "Una cucharada de mostaza",
            "3 huevos",
            "Pan rallado C/N",
            "Aceite C/N",
            "Sal y pimienta C/N"
        ],
        directions: [
            "Limpiar la carne y sacarle el exceso de grasa",
            "Marinarla con el huevo, sal, pimienta, mostaza y provenzal",
            "Ir pasándola por pan rallado, presionando bien para que se pegue",
            "Mandar un rato a la heladera con separadores",
            "Freir o cocinar al horno con un poco de aceite"
        ],
        photoPaths: [
            "./images/milas-01.jpg",
            "./images/milas-02.jpg",
            "./images/milas-03.jpg"
        ]
    }
]

let recipesContent = "";
let recLenght = selection.length
for (var i = 0; i < recLenght; i++) {
    // each recipe ingredients
    let recIngredients = ``
    selection[i].ingredients.forEach(ing => {
        recIngredients += `<li>${ing}</li>`
    })
    // each recipe directions
    let recDirections = ``
    selection[i].directions.forEach(dir => {
        recDirections += `<li>${dir}</li>`
    })
    recipesContent += `
        <div>
        <div class="recipe">
            <div class="recipe-card">
                <img
                    src=${selection[i].photoPaths[0]}
                    alt=${selection[i].name}
                />
                <div class="text-container">
                    <h4>${selection[i].name}</h4>
                    <p>${selection[i].description}</p>
                </div>
            </div>

            <div class="recipe-display-container hidden">
            <div class="recipe-display">
                <header class="rec-disp-header">
                    <h2>${selection[i].name}</h2>
                    <i class="fa-solid fa-xmark close-rec"></i>
                </header>

                <div class="rec-ingredients">
                    <h3>Ingredients</h3>
                    <div class="ing-img-flex">
                        <ul>
                            ${recIngredients}
                        </ul>
                        <img
                            src=${selection[i].photoPaths[1]}
                            alt=${selection[i].name}
                        />
                    </div>
                </div>

                <div class="rec-directions">
                    <h3>Directions</h3>
                    <div class="dir-img-flex">
                        <img
                            src=${selection[i].photoPaths[2]}
                            alt=${selection[i].name}
                        />
                        <ul>
                             ${recDirections}
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>`
}

document.querySelector("#recipe-cards").innerHTML = recipesContent

let recipes = document.querySelectorAll(".recipe")
recipes.forEach(recipe => recipe.querySelector(".recipe-card").addEventListener("click", () => {
    let displayCont = recipe.querySelector(".recipe-display-container")
    displayCont.classList.remove("hidden")
    let cards = document.querySelectorAll(".recipe-card")
    cards.forEach(card => card.classList.add("hidden"))
    document.querySelector(".selection-grid").style.gridTemplateColumns = "1fr"
    document.querySelector(".selection-grid").style.gap = "0"
}))

let closeRecs = document.querySelectorAll(".close-rec")
closeRecs.forEach(x => x.addEventListener("click", () => {
    let cards = document.querySelectorAll(".recipe-card")
    cards.forEach(card => card.classList.remove("hidden"))
    let displayConts = document.querySelectorAll(".recipe-display-container")
    displayConts.forEach(cont => cont.classList.add("hidden"))
    document.querySelector(".selection-grid").style.gridTemplateColumns = "var(--selection-grid-frs)"
    document.querySelector(".selection-grid").style.gap = "var(--selection-grid-gap)"
}))


// ***** Recipe web search *****

const searchBtn = document.querySelector("#search-btn")
searchBtn.addEventListener("click", checkInput)

function checkInput() {
    document.querySelector("#input-empty-error").classList.add("hidden")
    document.querySelector("#input-typing-error").classList.add("hidden")
    document.querySelector("#results").innerHTML = ""
    const ingredient = document.querySelector("#text-input").value
    if (ingredient.length == 0) {
        document.querySelector("#input-empty-error").classList.remove("hidden")
    } else {
        getRecipes(ingredient)
    }
}

function getRecipes(ingredient) {
    const appId= "f0066eb3"
    const appKey = "c0ed70ae7e477a44d37b0033b0aab25c"
    const APIURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${appId}&app_key=${appKey}&ingr=4-14&random=false`

    fetch(APIURL)
        .then(res => res.json())
        .then(res => {
            let list = ``;
            for(let i=0; i<10; i++) {
                const mealName = res.hits[i].recipe.label
                const imgSrc = res.hits[i].recipe.image
                let ingredients = ``
                res.hits[i].recipe.ingredientLines.map(el => {
                    ingredients += `<li>${el}</li>`
                })
                list += (`
                    <div class="meal" id="meal-${i}">
                        <div class="meal-title">
                            <h3>${mealName}</h3>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        <div class="meal-info-cont hidden">
                            <div class="meal-info">
                                <div class="meal-img-ing-flex">
                                    <img src="${imgSrc}" alt="${mealName}" />
                                    <div class="meal-ingredients">
                                        <h4>Ingredients</h4>
                                        <ul>${ingredients}</ul>
                                    </div>
                                </div>
                                <a href="${res.hits[i].recipe.url}" target="_blank">View recipe at <strong>${res.hits[i].recipe.source}</strong></a>
                            </div>
                        </div>
                    </div>
                `)
            }
            document.querySelector("#results").innerHTML = `
                <div class="meals">${list}</div>
            `
            showInfo()
        }).catch(error => {
            document.querySelector("#input-typing-error").classList.remove("hidden")
        })
}

function showInfo() {
    const meals = document.querySelectorAll(".meal")
    meals.forEach((meal, index) => {
        let title = meal.querySelector(".meal-title")
        let mealInfoCont = meal.querySelector(".meal-info-cont")
        title.addEventListener("click", () => {

            // hide others
            meals.forEach((item, ind) => {
                if(index !== ind) {
                    item.querySelector(".meal-info-cont").classList.add("hidden")
                    item.querySelector("i").classList.replace("fa-minus", "fa-plus")
                    item.querySelector("i").style.border = "2px solid transparent"
                    item.querySelector(".meal-title").style.borderRadius = "10px"
                }
            })

            // show/hide info
            mealInfoCont.classList.toggle("hidden")
            if (!mealInfoCont.classList.contains("hidden")) {
                title.querySelector("i").classList.replace("fa-plus", "fa-minus")
                title.style.borderRadius = "10px 10px 0 0"
                title.querySelector("i").style.border = "2px solid var(--white)"
            } else {
                title.querySelector("i").classList.replace("fa-minus", "fa-plus")
                title.style.borderRadius = "10px"
                title.querySelector("i").style.border = "2px solid transparent"
            }
        })
    })
}
