export default class Dato {
    constructor(descripcion, valor){
        this._descripcion = descripcion
        this._valor = valor
    }

    setDescripcion(nuevaDescripcion){
        this._descripcion = nuevaDescripcion
    }
    getDescripcion(){
        return this._descripcion
    }

    setValor(nuevoValor){
        this._valor = nuevoValor
    }
    getValor(){
        return this._valor
    }
}
