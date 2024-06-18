import Dato from './Dato.mjs'

export default class Ingreso extends Dato {
    // static contadorIngresos = 0

    constructor(descripcion, valor, id){
        super(descripcion, valor)
        this._id = id
    }

    getId(){
        return this._id
    }
}
