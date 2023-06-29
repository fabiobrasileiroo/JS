function objetoParaArray(objeto){
    var arrayResultado = []
    
    for (var chave in objeto) {
        var parChaveValor = [chave, objeto[chave]]
        arrayResultado.push(parChaveValor)
    }
    return console.log(arrayResultado)
}


objetoParaArray({nome:"fabio", profissao: "Desenvolvimento de software"})