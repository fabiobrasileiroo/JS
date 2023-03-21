//primerio elemento indice 0,1...
const valores = [3.3,2.2,1.1]
valores [4] = 10
console.log(valores)
console.log(valores.length)
valores.push({id: 3}, false, null, 'teste')
console.log(valores)
console.log(valores.pop())
delete valores[0]