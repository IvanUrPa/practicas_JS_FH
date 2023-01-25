let objetoJS = {
    nombre: "Ivan",
    edad:30,
    imprimir: function (){
        console.log(this.nombre, this.edad);
    }
};

console.log("Objeto literal", objetoJS)

// parsear objeto JSON
let jsonString = JSON.stringify(objetoJS);

console.log(jsonString);

let objetoDesdeJson = JSON.parse(jsonString);
console.log(objetoDesdeJson);
console.log(objetoDesdeJson.nombre);
console.log(objetoDesdeJson.edad);