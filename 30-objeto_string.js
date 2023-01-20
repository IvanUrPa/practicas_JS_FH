let a = new String("Ivan")
console.log(a[0])

console.log(a.toUpperCase())
console.log(a.toLocaleLowerCase())

let i = a.indexOf('a')
console.log("la letra esta en la posición: ", i)

let x = a.lastIndexOf('a')
console.log("la ultima letra esta en la posición: ", x)

let b = new String("Ivan Ruben Urbano Palafox")
let y = b.indexOf('Urbano')
console.log("la palabra buscada esta en la posición: ", y)

//Obtener un pedazo del string
let nombre = b.substring(6,12)
console.log(nombre)

//obtener una palabra
nombre = b.substring(0, b.indexOf(" "))
console.log(nombre)

//split
let split = b.split(" ")
console.log(split)
console.log(split.length)

// funciones viejas
document.write("hola mundo");
document.write(b.italics())
document.write(b.blink())
document.write(b.bold())