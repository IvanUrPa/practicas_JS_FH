let fecha = new Date(2023,9,20)

Date.prototype.sumarDias = function (dias){
    this.setDate(this.getDate()+dias)
    return this
}

Date.prototype.sumarAnios = function (anios){
    this.setFullYear(this.getFullYear() + anios)
    return this
}

console.log(fecha)
//console.log(fecha.sumarDias(7))
console.log(fecha.sumarDias(-20))

console.log(fecha.sumarAnios(5))