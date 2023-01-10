// Notación de punto
let persona = {
  nombre: "Juana",
  apellido: "Palafox",
  edad: 25,
  direccion: {
    pais: "México",
    ciudad: "CDMX",
    edificio: {
      nombre: "Edificio A",
      Telefono: "1234-5678"
    }
  }
}

console.log(persona.nombre)
console.log(persona.direccion)
console.log(persona.direccion.pais)

persona.direccion.zipcode = 57740
console.log(persona.direccion)

let edificio = persona.direccion.edificio

edificio.nopiso = "8vo piso"

console.log(persona)

// Notación Corchete
let campo = "edad"

console.log(persona["nombre"])

console.log(persona["direccion"]["pais"])

console.log(persona[campo])
