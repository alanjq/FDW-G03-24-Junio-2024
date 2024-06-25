// Obtener elementos usando "getElementsByTagName"
// let titulo = document.getElementsByTagName("h1")
// let subtitulo = document.getElementsByTagName("h2")
// let spanDom = document.getElementsByTagName("span")


// console.group("getElementsByTagName")
// console.log('titulo', titulo);
// console.log('sub', subtitulo);
// console.log('spanDom', spanDom);
// console.groupEnd()


// Obtener elementos usando QuerySelector
let h1 = document.querySelector("h1")
let h1Span = document.querySelector("h1 span")
let h2 = document.querySelector("h2")
let h2Span = document.querySelector("h2 span")


// console.group("querySelector")
// console.log('h1', h1);
// console.log('h1Span', h1Span);
// console.log('h2', h2);
// console.log('h2Span', h2Span);
// console.groupEnd()

// Manipular los elementos
h2Span.innerText = h2Span.innerText.toUpperCase()
h2.innerText = h2.innerText.replace("manipuando", "manipulando")

function cambiarAzul(elemento) {
    elemento.classList.remove('rojo')
    elemento.classList.add('azul')
}

function cambiarRojo(elemento){
    elemento.classList.remove('azul')
    elemento.classList.add('rojo')
}

// Llamar a las funciones para cambiar de color
cambiarAzul(h1)
cambiarRojo(h1Span)
cambiarRojo(h2)

// Trabajar con listas
let frutas = document.querySelectorAll("#listafrutas li")
console.log(frutas)

frutas.forEach((elemento)=>{
    console.log(elemento.innerText);
    elemento.setAttribute("class", elemento.innerText)
})
