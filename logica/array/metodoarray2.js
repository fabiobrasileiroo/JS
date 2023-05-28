/* function executar(param) {
    if(typeof param === "function") {
        console.log(param())
    }
}
function bomDia() {
    return "Bom dia"
}
let bd = bomDia
console.log(executar(bd)) */

const num = [1,2,3,4,5]

num.forEach(function(elemento, indice, array) {
    console.log(elemento, indice, array)
})