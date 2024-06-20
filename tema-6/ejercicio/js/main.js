const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)

let filas = []

// Paso 1 - Asignar ID a los inputs
// Paso 2 - Crear las variables
let descripcion = document.getElementById("descripcion")
let calorias = document.getElementById("calorias")
let carbohidratos = document.getElementById("carbohidratos")
let proteina = document.getElementById("proteina")

// Agregamos o quitamos clase dependiendo si el valor está vacío o no
const validarClase = (input) => input.value === "" ? input.classList.add('is-invalid') : input?.classList?.remove('is-invalid')


// Agregar evento a los inputs
let allInputs = document.querySelectorAll(".card-footer input")
allInputs.forEach((__input) => {
    __input.addEventListener('keyup', (e) => {
        validarClase(e.target)
    })
})


// Verificar los valores ingresados y agregarlos a la tabla
function validarInput() {
    validarClase(descripcion)
    validarClase(calorias)
    validarClase(carbohidratos)
    validarClase(proteina)

    // Una vez que todos los inputs esté correctos
    if (document.querySelectorAll(".card-footer input.is-invalid").length === 0) {
        filas.push({
            descripcion: descripcion.value,
            calorias: calorias.value,
            carbohidratos: carbohidratos.value,
            proteina: proteina.value
        })
        // Limpiar inputs
        document.getElementById('form').reset()

        renderizarTabla()
    }

}

let tabla = document.querySelector('tbody')

function renderizarTabla() {
    let html = filas.map((item) => crearHtmlFila(item))
    tabla.innerHTML = html
    // Actualizar totales
    document.getElementById('totalCalorias').innerText = filas.reduce((a, b) => parseInt(a.calorias) + parseInt(b.calorias))
    document.getElementById('totalCarbohidratos').innerText = filas.reduce((a, b) => parseInt(a.carbohidratos) + parseInt(b.carbohidratos))
    document.getElementById('totalProteina').innerText = filas.reduce((a, b) => parseInt(a.proteina) + parseInt(b.proteina))
}

// Crea el HTML de cada fila dentro de la tabla
const crearHtmlFila = ({ descripcion, calorias, carbohidratos, proteina }) => `<tr>
        <td>${descripcion}</td>
        <td>${calorias}</td>
        <td>${carbohidratos}</td>
        <td>${proteina}</td>
    </tr>`;

