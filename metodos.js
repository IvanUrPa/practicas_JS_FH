let persona = {
    nombre: "María",
    apellido: "García",
    imprimirNombre: function () {
        console.log(this.nombre + " " + this.apellido)
    },
    direccion: {
        pais:"Costa Rica",
        obtenerPais: function () {
            let self = this
            console.log("La dirección es en " + this.pais)

            let nuevoPais = function () {
                console.log(self)
                console.log("La dirección es en " + self.pais)
            }
            nuevoPais()
        }
    }
}

persona.imprimirNombre()
persona.direccion.obtenerPais()