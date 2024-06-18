let numeros = [14,5,6,67]

let cadenas = ["mango", "manzana", "uva", "pera"]

// Objeto para llenar el arreglo
const auto = {
    color: 'azul',
    marca: 'lala',
    modelo: 2024
}

// Arreglo de objetos
let objetos = [auto, {marca: null,  ...auto}, {...auto, modelo: 2019}, {
    color: 'verde',
    marca: 'lolo',
    modelo: 2025
}]
console.log(objetos)
console.log(objetos.length)

// Arreglo mixto
let mixto = [
    100,
    false,
    true,
    'Texto demo',
    auto,
    {
        nombre: 'nadie',
        objetos: null
    },
    'X',
    [
        2,
        3,
        true,
        'falso'
    ]
]
console.log(mixto)

// Definir tamaño y valor inicial
const fijo = Array(10).fill('X')
console.log(fijo)
console.log(fijo.length)

// Obtener objetos
console.log(mixto.indexOf('X'))
console.log(mixto[6])

mixto.map((item, pos)=>{
    if(!isNaN(item)){
        console.log('Encontré el número.', item, 'En la posición:', pos)
        return;
    }
})

fijo.forEach((item, pos)=>{
    if(pos === 5){
        fijo[pos] = 'S'
        console.log('Posición: ', pos, 'Valor:', item)
    }
})
console.log(fijo)


