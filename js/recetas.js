
// ***** Week selection cards *****

const recetasDestacadas = [
    {
        nombre: "Empanadas",
        descripcion: "Un clásico, en versiones omnívora y veggie. Para preparar mil y congelar!",
        rutaPagina: "./recetas/receta-01.html",
        ingredientes: [
            "12 tapas",
            "500 gr Cebolla",
            "500 gr Carne picada o Soja texturizada hidratada",
            "1 ají rojo o verde",
            "Comino C/N",
            "Pimentón dulce C/N",
            "Sal y pimienta C/N"
        ],
        pasos: [
            "Rehogar la cebolla con el ají",
            "Cuando la cebolla se transparente, agregar la carne o soja",
            "Esperar a que la carne cambie toda de color y condimentar",
            "Dejar enfriar el relleno",
            "Rellenar las tapas y hacer el repulgue",
            "Mandar a horno fuerte 10-15 minutos o hasta que se doren"
        ],
        rutasFotos: [
            "./imagenes/empanadas-01.jpg",
            "./imagenes/empanadas-02.jpg",
            "./imagenes/empanadas-03.jpg"
        ]
    },
    {
        nombre: "Milanesas",
        descripcion: "Sequitas y crocantes. Para disfrutar al plato o en un sánguche completo.",
        rutaPagina: "./recetas/receta-02.html",
        ingredientes: [
            "500 gr Nalga cortada finamente",
            "25 gr Provenzal",
            "Una cucharada de mostaza",
            "3 huevos",
            "Pan rallado C/N",
            "Aceite C/N",
            "Sal y pimienta C/N"
        ],
        pasos: [
            "Limpiar la carne y sacarle el exceso de grasa",
            "Marinarla con el huevo, sal, pimienta, mostaza y provenzal",
            "Ir pasándola por pan rallado, presionando bien para que se pegue",
            "Mandar un rato a la heladera con separadores",
            "Freir o cocinar al horno con un poco de aceite"
        ],
        rutasFotos: [
            "./imagenes/milas-01.jpg",
            "./imagenes/milas-02.jpg",
            "./imagenes/milas-03.jpg"
        ]
    }
]

let cards = "";
let recLenght = recetasDestacadas.length
for (var i = 0; i < recLenght; i++) {
    cards += `
        <div class="card-receta">
            <a href=${recetasDestacadas[i].rutaPagina}>
                <img
                    src=${recetasDestacadas[i].rutasFotos[0]}
                    alt=${recetasDestacadas[i].nombre}
                />
                <div class="contenedor-texto">
                    <h4>${recetasDestacadas[i].nombre}</h4>
                    <p>${recetasDestacadas[i].descripcion}</p>
                </div>
            </a>
        </div>`
}

document.querySelector("#cardsRecetas").innerHTML = cards;


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
                                <div class="img-ing-flex">
                                    <img src="${imgSrc}" alt="${mealName}" />
                                    <div class="ingredients">
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
                }
            })

            // show/hide info
            mealInfoCont.classList.toggle("hidden")
            if (!mealInfoCont.classList.contains("hidden")) {
                title.querySelector("i").classList.replace("fa-plus", "fa-minus")
            } else {
                title.querySelector("i").classList.replace("fa-minus", "fa-plus")
            }
        })
    })
}
