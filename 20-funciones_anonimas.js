/*Invocación de una función anonima*/
(function() {
  let a = 10

console.log(a)

function cambiarA() {
a = 20
}

cambiarA()

console.log(a)
})()


/*Otro ejemplo de función anónima*/
function ejecutarFuncion(fn){
  if(fn() === 1) {
    return true
  } else {
    return false
  }
}

console.log(
  ejecutarFuncion(function(){
    console.log("Funcion anonima ejecutada")
    return 1
  })
)

