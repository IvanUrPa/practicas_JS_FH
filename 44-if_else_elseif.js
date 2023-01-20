let nota = 55;
if(nota >= 90){
    console.log("A")
} else if(nota >=80) {
    console.log("B")
} else if(nota >=70){
    console.log("C")
} else if(nota >=60){
    console.log("D")
} else {
    if(nota>50)
        console.log("-F")
        console.log("Algo más")
}


console.log("Termino el código")


/*Manera corta de hacer un if*/
let a = 10;
let b = 20;
let c = (a > b)? a : b;
console.log(c)

/*otra manera de hacer el if*/
let d = (a > b)? function(){
    console.log("A es mayor a B");
    return a;
}() : function (){
    console.log("B es mayor a A");
    return b;
}();
console.log(d)

/*otra manera de hacer el if*/
let e = undefined
//solo comprueba si existe un valor o no
let f = a || e;
console.log(f)

function getnombre(nombre){
    let nomb = nombre || "<sin nombre>" || "<sin apellido>" || undefined;
    // let nomb = null || null || null || undefined;
    console.log(nomb)
}

getnombre("Pancho")