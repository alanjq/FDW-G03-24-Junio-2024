// Asignando a variables
function saludo(origen) {
    return "Hola, saludos de PF. Origen: " + origen
}

const mensajeDeSaludo = () => saludo("mensajeDeSaludo")

const objeto = {
    unaFuncion: saludo
}

// Mediante callbacks
function unafuncionAparte(saludar, origen) {
    console.log(saludar(origen))
}


unafuncionAparte(saludo, "función aparte")
