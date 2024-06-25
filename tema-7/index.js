// Corregir los títulos
function corregirTitulos() {
    // Obtener elementos usando QuerySelector
    let h1 = document.querySelector("h1")
    let h1Span = document.querySelector("h1 span")
    let h2 = document.querySelector("h2")
    let h2Span = document.querySelector("h2 span")

    // Manipular los elementos
    h2Span.innerText = h2Span.innerText.toUpperCase()
    h2.innerText = h2.innerText.replace("manipuando", "manipulando")

    // Llamar a las funciones para cambiar de color
    cambiarAzul(h1)
    cambiarRojo(h1Span)
    cambiarRojo(h2)
}


function cambiarAzul(elemento) {
    elemento.classList.remove('rojo')
    elemento.classList.add('azul')
}

function cambiarRojo(elemento) {
    elemento.classList.remove('azul')
    elemento.classList.add('rojo')
}

// Estilos para las frutas
function estilosFrutas() {
    // Trabajar con listas
    let frutaContainer = document.getElementById("frutas")
    frutaContainer.classList.add("frutas")
    let listaFrutas = document.querySelectorAll("#listafrutas li")

    listaFrutas.forEach((elemento) => {
        console.log(elemento.innerText);
        elemento.setAttribute("class", elemento.innerText)
    })
}
