try {
    let a = 100
    if (a === 100){
        throw 'que mal'
    } else {
        throw 'oh oh!!'
    }

    console.log("El valor de a es: ", a)
}
catch (e){
    if (e === "que mal"){
        console.log("Error tipo 1")
    }
    if (e === "oh oh!!") {
        console.log("Error tipo 2")
    }

}

finally {
    console.log("Finalmente")
}