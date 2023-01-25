/*
setTimeout(function(){
    console.log("paso un segundo");
}, 2000);*/

/*let segundos = 0;
let intervalo = setInterval(function(){
    segundos++;
    console.log("segundos: ", segundos);
    if(segundos === 3){
        clearInterval(intervalo);
    }
},1000);*/


let juan = {
    nombre: "Juan",
    edad: 30,
    imprimir: function (){
        let self = this;
        setTimeout(function (){
            console.log(self.nombre, self.edad);
        },1000)
    }
}

juan.imprimir();