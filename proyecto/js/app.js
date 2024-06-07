let egresos = {
    Renta: 900,
    Ropa: 400,
    Luz: 300,
    Agua: 500,
}

let ingresos = {
    Quincena: 9000,
    Venta: 400,
    Bazar: 500
}

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentajeEgreso = (totalIngresos() - totalEgresos()) / totalIngresos()

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
