const recetas = [
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
for (var i = 0; i < recetas.length; i++) {
    cards += `
        <div class="card-receta">
            <a href=${recetas[i].rutaPagina}>
                <img
                    src=${recetas[i].rutasFotos[0]}
                    alt=${recetas[i].nombre}
                />
                <div class="contenedor-texto">
                    <h4>${recetas[i].nombre}</h4>
                    <p>${recetas[i].descripcion}</p>
                </div>
            </a>
        </div>`
}

document.querySelector("#cardsRecetas").innerHTML = cards;
