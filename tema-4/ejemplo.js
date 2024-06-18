const objeto = {}

let objeto2 = {}

// Objeto ABSTRACTO
const Persona = {
    caminar(){
        console.log('caminar')
    },

    respirar(){
        console.log('respirar')
    },

    nombre: '',
    apellido: ''
}

// Asignar propiedades
objeto.propiedad1 = 'ejemplo'
objeto.propiedad2 = 'ejemplo 2'

// Eliminar propiedades
delete objeto.propiedad2
objeto.propiedad2 = undefined

// Crear un objeto a partir de persona
const Estudiante = {
    ...Persona,
    matricula: '324222'
}

Estudiante.nombre
Estudiante.apellido
Estudiante.matricula

Estudiante.respirar()

Estudiante.comprobarAsistencia = function(){
    console.log('Asistencia')
}

Estudiante.comprobarAsistencia()
