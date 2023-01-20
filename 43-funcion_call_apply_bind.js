let carro = {
    color: "Blanco",
    marca: "Mazda",
    imprimir:function () {
        var salida = this.marca+" - "+this.color;
        return salida;
    }
}

let carro2 = {
    color: "Rojo",
    marca: "Toyota"
}

console.log(carro.imprimir())

let logCarro = function(arg1, arg2){
    console.log("Carro: ", this.imprimir());
    console.log("Argumentos:", arg1, arg2)
    console.log("========================")
}

//bin, establecer el objeto y establecer this
let logModelo = logCarro.bind(carro);
logModelo("abc", "xyz")

//call
logModelo.call(carro, "123", "456")

//apply
logModelo.apply(carro, ["bdc", "456"])

/*funciones prestadas*/
console.log(carro.imprimir.call(carro2))