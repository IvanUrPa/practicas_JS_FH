function Persona() {
    this.nombre = "Juan"
    this.apellido = "Mendoza"
    this.edad = 30

    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido
    }
}

let nombre = new Persona()

console.log(nombre)
console.log(nombre.nombre)
console.log(nombre.nombreCompleto())


/*misma funcion pero con paso por variables*/
function Persona2(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = 30

    this.nombreCompleto2 = function() {
        return this.nombre + " " + this.apellido
    }
}

let nombre2 = new Persona2("Ivan", "Urbano")

console.log(nombre2)
console.log(nombre2.nombre)
console.log(nombre2.nombreCompleto2())
