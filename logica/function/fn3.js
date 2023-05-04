function executar(funcao) {
    if(typeof funcao === "function") {
        console.log(funcao())
    }
}
function bomDia() {
    return "Bom dia"
}
executar(bomDia)

const x = bomDia
console.log(x) 