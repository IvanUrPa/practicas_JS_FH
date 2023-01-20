// Inicializadores de fecha

let hoy = new Date()
let fechaMilisegundos = new Date(0)
//let fFija = new Date(anio, mes, dia, hora, min, seg, mili)
let fFija = new Date(2023, 0, 18, 1, 30, 15, 1)


console.log(hoy)
console.log(fechaMilisegundos)
console.log(fFija)

console.log(hoy.getFullYear())
console.log(hoy.getDate())
console.log(hoy.getHours())
console.log(hoy.getMilliseconds())
console.log(hoy.getMonth())
console.log(hoy.getDay())
console.log(hoy.getSeconds())
console.log(hoy.getMinutes())
console.log(hoy.getTime())

// Ejemplo del uso de getTime
let inicio = new Date()
for (let i = 0; i < 15000; i++) {
    console.log("haciendo algo")
}
let fin = new Date()
console.log(inicio)
console.log(fin)

let tiempo = fin.getTime() - inicio.getTime()
console.log(tiempo, "milisegundos")
console.log(tiempo/1000, "segundos")

//libreria momentjs.com