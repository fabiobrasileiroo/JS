let valor//não foi iniciada
console.log(valor)

valor = null // 
console.log(valor)
//console.log(valor.toString()) erro typeErro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!! produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)