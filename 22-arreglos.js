/*Declaración de arreglo*/
let arr = [5,4,3,2,1]

/*consulta de elementos del arreglo*/
console.log(arr)
console.log(arr[0], arr[4])

/*funciones para arreglos*/
// funcion reverse
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

//introduce elemento al inicio del arreglo
arr.unshift("0")
console.log(arr)

//representación textual del arreglo
console.log(arr.toString())

//eliminar el ultimo elemento del arreglo
let elimine = arr.pop()
console.log(arr, elimine)

//splice (posición a apuntar, elementos a eliminar, meter elemento a esa posición)
arr.splice(1,2,"10","20","30")
console.log(arr)

arr.splice(1,0,"10","20","30")
console.log(arr)

//(primer posición del arreglo a cortar, segunda posición del arreglo a cortar)
arr = arr.slice(1,3)
console.log(arr)
