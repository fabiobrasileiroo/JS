let num = [ 5, 2, 3]
num.push(4)//colocar na depois da ultima posição 4
console.log(num.length)//mostra quantos elentos eu tenho dentro do array
num.sort()//independete do valor irar colocar os elementos em ordem crescente do menor para maior
console.log(num)
console.log(num[0])

for(let pos=0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num) {
    console.log(`A posição ${pos} temo o valor ${num[pos]}`)
}
let pos = num.indexOf(2)
console.log(num.indexOf(10 ))
if (pos == -1) {
    console.log('vetor não contrando')
} else {
    console.log('valor encotrando')
}
