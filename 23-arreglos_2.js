let arr = [
  true,
  {
    nombre: "Fernando",
    apellido:"Herrera"
  },
  function(){
    console.log("Estoy viviendo en un arreglo")
  },
  function(persona) {
    console.log(persona.nombre + " " + persona.apellido)
  },
  [1,2,3,4,5],
  ["Jesus", "Ivan", "Urbano", "Marañón", function() {console.log(this)}]
]

console.log(arr)
console.log(arr[0])
console.log(arr[1].nombre + " " + arr[1].apellido)

//invocación de una función anonima
arr[2]()
arr[3](arr[1])

//consulta del arreglo anidado dentro de otro arreglo
console.log(arr[5][0])

let arreglo2 = arr[5]
arreglo2[1] = "Ruben"
console.log(arreglo2)

arreglo2[4]()

// length permite saber el numero de valores dentro del arreglo
console.log(arr.length)