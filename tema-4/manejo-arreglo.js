// Arreglo mixto
let mixto = [
    100,
    false,
    true,
    'Texto demo',
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

// Agregar valor al final
mixto.push('ultimo')


// Eliminar elemento del inicio
mixto.shift()
mixto.shift()
mixto.shift()

// Agregar elemento al inicio
mixto.unshift('Primero')

// Eliminar el último elemento
mixto.pop()
mixto.pop()

// Agregar elemento al final
mixto.push('Último')

// Eliminar un elemento según la posición
mixto.splice(2,1)

// Modificar un valor
mixto[2] = 'Valor nuevo'

console.log(mixto)
