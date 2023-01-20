function crearCookie(nombre, valor){
    valor = encodeURI(valor);
    let hoy = new Date();
    hoy.setMonth(hoy.getMonth()+1);


    document.cookie = nombre+"="+valor+";expires="+hoy.toUTCString()+";";
}

// let demo = "123;123*123'123/ 123";
// console.log(demo);
// console.log(encodeURI(demo));
// console.log(decodeURI(demo));

// Borrar cookie
function borrarCookie(nombre){
    let hoy = new Date();
    hoy.setMonth(hoy.getMonth()-1);

    document.cookie = nombre+"=x;expires="+hoy.toUTCString()+";";
}

// crearCookie("nombre", "Fernando")
// crearCookie("correo", "fernando@gmail.com")
// crearCookie("direccion", "San Francisoc Costa Rica")

borrarCookie("nombre")

let cookies = document.cookie;

console.log(cookies)