// Objetos y funciones
const alumno = {
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    saludo: '',
    crear: function () {
        console.log('crear', this);
    },
    create: () => {
        console.log('create', this);
    },
    new(nombre, apellido, nacimiento) {
        return {
            nombre,
            apellido,
            fecha_nacimiento: nacimiento
        }
    }
}

alumno.crear()
alumno.create()
alumno.new()