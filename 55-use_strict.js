// "use strict";

function getNombre(){
    "use strict";
    let nombre2 = "Ruben";
    return nombre2;
}

let nombre = "Ivan";
console.log(nombre);
console.log(getNombre());

// *modo strict encapsulado
(function(){
    "use strict";
    function getNombre2(){
        let nombre3 = "Ruben";
        return nombre3;
    }

    let nombre4 = "Ivan";
    console.log(nombre4);
    console.log(getNombre2());
})();