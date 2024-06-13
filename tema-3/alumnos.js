const alumnos = {
    lista: [],
    agregar(nombre) {
        this.lista.push(nombre)
    },
    ver(numero){
        return this.lista[numero]
    }
}

// Crear
alumnos.agregar('Adriana')
alumnos.agregar('Daniel')
alumnos.agregar('Delibes')
alumnos.agregar('Rolando')

// Ver / obtener
// alumnos.ver(2)
