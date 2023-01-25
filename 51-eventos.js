function evento(arg){
    console.log("Me dispare");
    console.log(arg);
    // console.log(arg.keyCode);
    console.log(arg.x, arg.y);
}

let objeto = document.getElementById("objDemo");
// console.log(objeto);

// objeto.addEventListener("keypress", evento);
objeto.addEventListener("click", evento);
objeto.click();