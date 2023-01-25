for (let i=0; i<=10; i++){
// for (let i=0; i<=10; i+=2){
    if (i == 5){
        // continue;
        break;
    }
    console.log(i)
}


let Persona = function (){
    this.nombre= "Juan";
    this.apellido="Pineda";
    this.edad=18;
}

let juan = new Persona();

Persona.prototype.direccion="San José";

for(prop in juan){
    console.log(juan.hasOwnProperty(prop))
    // if (!juan.hasOwnProperty(prop))
    if (juan.hasOwnProperty(prop))
        continue;
    console.log(prop,": ", juan[prop]);
}

for (num in [1,2,3,4,5,6,7,8,9,10]){
    console.log(num);
}

[1,2,3,false,5,6,7,true,9,"Pedro"].forEach(function (val){
   console.log(val);
});