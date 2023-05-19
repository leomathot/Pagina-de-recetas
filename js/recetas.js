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
for (var i = 0; i < recetasDestacadas.length; i++) {
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


// Recipe search

function getRecipes() {

    let ingredient = document.querySelector("#text-input").value

    if (ingredient == "") {
        alert("Please introduce a word")
        return
    }
    const appId= "f0066eb3"
    const appKey = "c0ed70ae7e477a44d37b0033b0aab25c"

    enlaceAPIRecetas = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${appId}&app_key=${appKey}&ingr=4-14&random=false`

    fetch(enlaceAPIRecetas)
        .then(res => res.json())
        .then(res => {

            let list = ``;

            for(let i=0; i<10; i++) {

                    const meal = res.hits[i].recipe.label
                    const imgSrc = res.hits[i].recipe.image
                    let ingredients = ``

                    res.hits[i].recipe.ingredientLines.map(el => {
                        ingredients += `<li>${el}</li>`
                        })

                    list += (`
                        <div class="meal" id="meal-${i}">
                            <h3 id="meal-${i}-h3" onclick={showInfo(${i})}>${meal}</h3>
                            <div class="hidden meal-info-cont" id="meal-${i}-info-cont">
                                <div class="meal-info">
                                    <div class="img-ing-flex">
                                        <img src="${imgSrc}" alt="${meal}" />
                                        <div class="ingredients">
                                            <h4>Ingredients</h4>
                                            <ul>${ingredients}</ul>
                                        </div>
                                    </div>
                                    <a href="${res.hits[i].recipe.url}" target="_blank">View recipe at <span class="source-name"><strong>${res.hits[i].recipe.source}</strong></span></a>
                                </div>
                            </div>
                        </div>
                    `)
                }

            const imgSrc = res.hits[0].recipe.image
            document.querySelector("#results").innerHTML = `

                <div class="meals">${list}</div>`
            
            })
}

function showInfo(i) {
    document.querySelector(`#meal-${i}`).classList.toggle("glass-02")
    document.querySelector(`#meal-${i}`).classList.toggle("pad-10")
    document.querySelector(`#meal-${i}-h3`).classList.toggle("fondo-1")
    document.querySelector(`#meal-${i}-info-cont`).classList.toggle("hidden")
}
