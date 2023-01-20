//let reg1 = RegExp("a")
let reg2 = /a/
// i = insensible
// g = todas apariciones
// m = multilinea

let texto = "Holaa mundoo Hoooola de nuevoo"
let arr = texto.match(/o{3,4}/g)
// let arr = texto.match(/[0-9]/)
// let arr = texto.match(/^H[a-zA-Z]/)
// let arr = texto.match(/\s/)
// let arr = texto.match(/\w/)
// let arr = texto.match(/\d/)
console.log(arr)

// busca que el caracter se encuentre localizado en la primera posición
console.log(texto.match(/^a/))
console.log(texto.match(/^H/))

// busca que el caracter se encuentre localizado en la ultima posición
console.log(texto.match(/d$/))
console.log(texto.match(/o$/))

// busca cualquier caracter con el .
console.log(texto.match(/.../))
console.log(texto.match(/^.o/))
