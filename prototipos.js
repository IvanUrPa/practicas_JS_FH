function Persona() {
    this.nombre = "Ivan"
    this.apellido = "urbano"
    this.edad = 42
}

// * Prototipo de funcion utilizada para ahorrar uso de memoria
Persona.prototype.imprimirInfo = function () {
    console.log(this.nombre + " " + this.apellido + " ("+ this.edad +")")
}

// * ejemplo de otro prototipo
Number.prototype.esPositivo = function () {
    if(this>0) {
        return true
    }else {
        return false
    }
}

let people = new Persona()

console.log(people)
console.log(people.imprimirInfo())