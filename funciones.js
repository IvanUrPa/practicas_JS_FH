/*Estructura de una funcion con parametros*/
function imprimir (nombre, apellido) {
    //* apellido indefinido coloca xxx
    /*if (apellido === undefined) {
        apellido = "xxx"
    }*/

    //* Otro tipo de hacer el if de arriba
    apellido = apellido || "yyy"

    console.log(nombre + " " + apellido)
}

//* Envio de parametros a la funcion imprimir
imprimir("Pedro", "Paramo")
imprimir("Pedro")

/*Estructura de una funcion con objetos*/
function imprimir2(persona){
    console.log(persona.nombre + " " + persona.apellido)
    persona.nombre = "Maria"
}

var persona = {
    nombre:"Pedro",
    apellido:"Paramo"
}

imprimir2(persona)

/*Estructura de funciones con funcion anonima como parametro*/
function imprimir3(fn){
    fn()
}

//* Ejemplo de funcion anonima
imprimir3(function() {
    console.log("Funcion anonima()")
})

/*Estructura de funciones con funcion explicita como parametro*/
function imprimir4(fn2){
    fn2()
}

//* Ejemplo de funcion explicita
var miFuncion = function() {
    console.log("miFuncion")
}

imprimir4(miFuncion)