function crearFunciones() {
  let arr = []
  //let numero = 1

  for(let numero = 1; numero <= 5; numero ++)
  {
    arr.push(
      (function(numero){
        return function(){
          console.log(numero)
        }
      })(numero)
    )
  }
  return arr
}

let funciones = crearFunciones()

funciones[0]()
funciones[1]()
funciones[2]()
funciones[3]()
funciones[4]()