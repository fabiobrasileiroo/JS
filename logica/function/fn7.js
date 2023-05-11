function retornar() {
    function bomDia() {
        return "Bom dia!!!"
    }
    return bomDia
} 
console.log(retornar())
console.log(retornar()())
const umFuncao = retornar()
console.log(umFuncao())