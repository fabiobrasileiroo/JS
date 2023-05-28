const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 8;i>-1;i-= 2) {
    console.log(numeros[i])
}
numOrdemHorizontal = ''
for(let u = 8;u>-1;u-= 2) {
    numOrdemHorizontal += numeros[u] + ' '
}
console.log(numOrdemHorizontal)
numOrdem = ''
for(let e = numeros.length - 2; e >= 0; e -=2) {
    numOrdem += numeros[e] + ' '
}
console.log(numOrdem)