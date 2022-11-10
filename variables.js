let a = 1
let b = "Ivancho"
let c = undefined
let d = null

let persona = {
    nombre:"Ivan",
    edad:26,
    estadoCivil:{
        estado:"casado"
    },
    localidad:{
        pais:"México",
        estado:"CDMX"
    }
}

console.log(a)
console.log(b)
console.log(c)
console.log(d)

//Notacion de punto
console.log(persona)
console.log(persona.estadoCivil.estado)

//Añadiendo propiedad hijos dentro de estado civil
persona.estadoCivil.hijos = 5
console.log(persona.estadoCivil)

let estatus = persona.estadoCivil
console.log(estatus)

//Notacion de corchetes usada para traer datos dinamicos
console.log(persona["localidad"]["pais"])

let localidad2 = ["localidad"]
let pais2 = ["pais"]
console.log(persona[localidad2][pais2])
