// Simular SELECT de SQL
function interseccion(a, b){
    var resultado = []

    for(let i=0; i < a.length; i++){
        for(let j=0; j < b.length; j++){
            if(a[i] === b[j]){
                resultado.push(a[i])
                break;
            }
        }
    }

    return resultado.sort()
}

// Otro ejemplo con función flecha
const intersection = (a,b) => a.filter(value=>b.indexof(value) > -1).sort()
