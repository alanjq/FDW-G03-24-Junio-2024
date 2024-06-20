const arreglo = [1,2,3]

const mapeo = arreglo.map(
    function(elemento){
        return elemento+1
    }
)
console.log(mapeo)

const reducido = arreglo.reduce(
    function(elem1, elem2){
        return elem1 + elem2
    }
)

console.log(reducido)

const filtrado = arreglo.filter(
    function(elemento, index){
        return index == 2
    }
)

console.log(filtrado)
