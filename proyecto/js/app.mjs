import Egreso from './Egreso.mjs'
import Ingreso from './Ingreso.mjs'

let egresos = [
    new Egreso('Renta', 900, 0),
    new Egreso('Ropa', 400, 1),
    new Egreso('Luz', 300, 2),
    new Egreso('Agua', 500, 3)
]

let ingresos = [
    new Ingreso('Quincena', 9000, 0),
    new Ingreso('Venta', 400, 1),
    new Ingreso('Bazar', 500, 2)
]

console.log('engre', egresos, ingresos);

const eliminarIngreso = (index) => {
    console.log('Eliminar ingreso', index)
}

const eliminarEgreso = (index) => {
    console.log('Eliminar egreso', index)
}
// Elemento HTML
const htmlIngreso = (index, descripcion, valor) => {
    return `<div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">+${valor}</div>
                    <div class="elemento_eliminar">
                        <button class="elemento_eliminar_btn" onclick="eliminarIngreso(${index})">
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>`
}

const htmlEgreso = (index, descripcion, valor, porcentaje) => {
    return `<div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">-${valor}}</div>
                    <div class="elemento_porcentage">${porcentaje}%</div>
                    <div class="elemento_eliminar">
                        <button class="elemento_eliminar_btn" onclick="eliminarEgreso(${index})">
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>`
}

const mostrarIngresos = () => {
    let html = ""
    ingresos.map((ingreso, index) => {
        html += htmlIngreso(index, ingreso.getDescripcion(), ingreso.getValor())
    })
    document.getElementById('lista-ingresos').innerHTML = html
}

const mostrarEgresos = () => {
    let html = ""
    egresos.map((egreso, index) => {
        html += htmlEgreso(index, egreso.getDescripcion(), egreso.getValor(), "3%")
    })
    document.getElementById('lista-egresos').innerHTML = html
}


const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentajeEgreso = (totalIngresos() - totalEgresos()) / totalIngresos()

    mostrarIngresos()
    mostrarEgresos()

    console.log('presupuesto', formatoMoneda(presupuesto));
    console.log('porcentajeEgreso', formatoPorcentaje(porcentajeEgreso.toFixed(2)));
}

const totalIngresos = () => {

    let total = 0

    for (const key in ingresos) {
        const value = ingresos[key]
        total = total + value
    }
    return total
}

const totalEgresos = () => {
    let total = 0

    for (const key in egresos) {
        const value = egresos[key]
        total = total + value
    }
    return total
}

const formatoMoneda = (valor) => `$${valor.toLocaleString()}`
const formatoPorcentaje = (valor) => `${valor.toLocaleString()}%`

cargarCabecero()
