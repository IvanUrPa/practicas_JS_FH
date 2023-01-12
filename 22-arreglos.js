/*Declaración de arreglo*/
let arr = [5,4,3,2,1]

/*consulta de elementos del arreglo*/
console.log(arr)
console.log(arr[0], arr[4])

/*funciones para arreglos*/
// funcion revrese
arr.reverse()
console.log(arr)

// función map
arr = arr.map(function(elem){
  elem *= 2
  return elem
})
console.log(arr)

arr = arr.map(function(elem){
  elem *= elem
  return elem
})
console.log(arr)

//Raiz cuadrada
arr = arr.map(Math.sqrt)
console.log(arr)

//join
arr = arr.join("|")
console.log(arr)

//split
arr = arr.split("|")
console.log(arr)

//push introduce elemento al final del arreglo
arr.push("6")
console.log(arr)

// introduce elemento al inicio del arreglo


