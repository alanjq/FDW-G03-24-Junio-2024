// Funciones
function saludar(nombre) {
    if (nombre) {
        console.log(`¡Hola ${nombre}! Buenas noches.`)
    }
    else {
        console.log("Buenas noches.")
    }
}

function calcularCuadrado(numero) {
    return numero * numero
}

function tipoOperacion(signo) {
    switch (signo) {
        case '+':
            return 'suma'
        case '-':
            return 'Resta'

        default:
            return 'Operación no válida'
    }
}


let cuadrado = calcularCuadrado(9)
console.log(cuadrado)

let nombreOperacion = tipoOperacion(',')
console.log(nombreOperacion);
