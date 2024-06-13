/* function contarCaracteres(cadena = '') {
    // Si no hay un mensaje colocamos un warning
    if(cadena == ''){
        console.warn('No ingresaste ninguna cadena')
        return ;
    }
    console.log(`La cadena ${cadena} tiene ${cadena.length} caracteres`)
}
 */
const contarCadena = (texto='') =>
    texto.length === 0
        ? console.warn('No ingresaste ninguna cadena')
        : `La cadena ${texto} tiene ${texto.length} caracteres`;

var pelicula = (function(nombre){
    console.log(`El nombre de la película es ${nombre}`)
})

function sumar(numA, numB, resultadoA, resultadoB){
    let suma = numA + numB
    console.log(suma)
    if(resultadoA){
        resultadoA(numA, numB)
        console.log('resultado A ', numA+ numB);

    }
    if(resultadoB){
        resultadoB(numA, numB)
        console.log('resultado B', numA + numB);
    }

}
