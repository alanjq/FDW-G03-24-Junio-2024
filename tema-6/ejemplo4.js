var variable_global = 50

// Funciones puras. Devuelve el mismo valor
const suma = (a, b) => a + b

console.log('Resultado de la suma', suma(5,3));

// Funciones impuras. Devuelve valor diferente
const tiempo = Date.now()

console.log(tiempo)

// Inmutabilidad
const funcion = (x) => {
    variable_global = 10
    return x + variable_global
}

console.log(funcion(5));
