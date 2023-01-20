let PI = Math.PI
let E = Math.E

console.log(PI)
console.log(E)

let num1 = 10.6789
console.log(num1)

//Funcion de redondeo
console.log(Math.round(num1))

//Funcion para obtener dos decimales
console.log(Math.round(num1*100)/100)

//Redondea al numero sin importar los decimales
console.log(Math.floor(num1))

//Obtener un numero aleatorio entre 0 y 1
let rnd = Math.random()
console.log(rnd)

// crear un numero random entero en un intervalo de valores
function randomEntre(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min)
}
console.log(randomEntre(1,100))

// obtener raiz cuadrada
console.log(Math.sqrt(121))

// potenciar valores donde los valores son base, exponente
console.log(Math.pow(2,4))