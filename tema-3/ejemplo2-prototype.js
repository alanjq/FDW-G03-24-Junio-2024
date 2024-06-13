// Funciones dentro de tipos de objetos definidos
let cadenaDeTexto = "Funciones dentro de tipos de objetos definidos"

// Función personalizada usando String.prototype
String.prototype.buscar = function () {
    console.log('Función demo', this)
}

console.log(typeof cadenaDeTexto);
