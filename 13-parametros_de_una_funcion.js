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
imprimir("Pedro", "Paramo")
imprimir("Pedro")

/*Estructura de una funcion con objetos*/
function imprimirObjAnonimo (persona) {
  console.log(persona.nombre + " " + persona.apellido)
  persona.nombre = "María"
}
var persona = {
  nombre:"Juan",
  apellido:"Paramo"
}

imprimirObjAnonimo(persona)

console.log(persona)

/*Estructura de funciones con funcion anonima como parametro*/
function imprimirFuncion(fn){
  fn()
}

//* Ejemplo de funcion anonima
imprimirFuncion(function(){
  console.log("Función anónima")
})

/*Estructura de funciones con funcion explicita como parametro*/
function imprimirFnExplicita(fn2){
  fn2()
}

//* Ejemplo de funcion explicita
var miFuncion = function() {
  console.log("miFuncion")
}

imprimirFnExplicita(miFuncion)