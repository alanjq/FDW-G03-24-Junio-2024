// Personalizar valores de tipo objeto
// Objeto
const Mamifero = {
    // Atributos / propiedades
    nombre: '',
    raza: '',
    altura: '',

    // Métodos/Operaciones
    respirar() {
        console.log('respirar')
    },
    comer() {
        console.log('comer')
    },
    domir() {
        console.log('dormir')
    },
}
Object.prototype.constructor = function () {
    console.log('inicia mamifero');
}


const Perro = {
    ...Mamifero,
    ladrar() {
        console.log('ladrar')
    }
}

const Gato = {
    ...Mamifero,
    maullar() {
        console.log('maullar')
    }
}

const Raton = {
    ...Mamifero,
    chillar() {
        console.chillar();
    },
}

let perro1 = Object.create(Perro)
perro1.nombre = 'Perro1'
perro1.ladrar()


console.log(Perro)
console.log(Gato)
console.log(Raton)

// Crear objeto a partir de una clase / Objeto existente
const hamster = Object.create({...Mamifero})
delete hamster.altura
delete hamster.raza
console.log(hamster)

