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

function getCookie(nombre){
    let cookies = document.cookie;

    let cookieArr = cookies.split("; ")
    console.log(cookieArr)

    for (let i=0; i <cookieArr.length; i++){
        let parArr = cookieArr[i].split("=")
        cookieArr[i] = parArr

        if (parArr[0]===nombre) {
            return decodeURI(parArr[1])
        }
    }

    //console.log(cookieArr)
    return undefined;
}

console.log(getCookie("direccion"))

crearCookie("nombre", "Fernando")
crearCookie("correo", "fernando@gmail.com")
crearCookie("direccion", "San Francisoc Costa Rica")

// borrarCookie("nombre")


// console.log(cookies)