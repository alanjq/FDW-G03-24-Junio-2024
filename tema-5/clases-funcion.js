function Persona(tipo){
    this.tipo = tipo
}

Persona.prototype.hablar = function(){
    console.log('Hablando...')
}

let per = new Persona('humano')
per.hablar()


console.log(per)
