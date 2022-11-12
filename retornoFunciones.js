/*funciones con retorno*/

//* return es la palabra reservada para realizar un regreso
function obtenerAleatorio() {
    return Math.random()
}
//console.log(obtenerAleatorio() + 10)
console.log(obtenerAleatorio())

/*ejemplo 2*/
function obtenerNombre() {
    return "Juan"
}
console.log(obtenerNombre()+ " Padilla")

/*ejemplo 3*/
let nombre = obtenerNombre();
console.log(nombre)

/*ejemplo 4*/
function esMayor05() {
    if(obtenerAleatorio() > 0.5) {
        return true
    } else {
        return false
    }
}

if (esMayor05()) {
    console.log("es mayor a 0.5")
} else {
    console.log("es menor a 0.5")
}

/*ejemplo 5 con objeto anonimo*/
function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

let persona = crearPersona("María", "Paz")

console.log(persona)
console.log(persona.nombre)
console.log(persona.apellido)

/*funciones que regresan funciones*/
function creaFuncion() {
    return function (nombre){
        console.log("me creo " + nombre)
        return function () {
            console.log("segunda función")
        }
    }
}

let nuevaFuncion = creaFuncion()

let segundaFuncion = nuevaFuncion(persona.nombre)
segundaFuncion()