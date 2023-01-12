function identifica(param) {
  console.log(typeof param)
}

function Persona() {

}

let juan = new Persona()

identifica("1")
identifica(1)
identifica({})
identifica(juan)
identifica(function(){})

/*Ejemplo práctico de typeof*/
function identifica2(param2) {
  if(typeof param2 == "function") {
    param2()
  } else {
    console.log(param2)
  }
}
identifica2(function(){console.log("Soy anonima")})
identifica2(1)

/*Ejemplo práctico de instanceof*/
function identifica3(param3) {
  console.log(typeof param3)
  console.log(param3 instanceof Persona2)
}

function Persona2() {

}

let fernando = new Persona2()

identifica3("fernando")