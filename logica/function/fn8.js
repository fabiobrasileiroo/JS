function retornarUmaFuncao() {
    return function() {
        return function() {
            return "Boa tarde"
        }
    }
}
console.log(retornarUmaFuncao()()())