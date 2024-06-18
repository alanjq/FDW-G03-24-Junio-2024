// Clase padre
class Figura {
    constructor(x, y) {
        this.xPosition = x
        this.yPosition = y
        console.log('CLASE PADRE: Figura')
    }

    obtenerArea() { }
}

// Clase hija
class Triangulo extends Figura {
    constructor(b, h) {
        super(b, h)
        this.b = b
        this.h = h
        console.log("CLASE HIJO: Triángulo")
    }

    obtenerArea() {
        return (this.b * this.h) / 2
    }
}

let figu = new Triangulo(5, 6)
console.log(figu.obtenerArea())