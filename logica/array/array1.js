const notas = [1,3,4,9,4,5]

let valores = ''

for(let nota of notas) {
    valores += nota + ' '
}
console.log(valores)
let indices = ''
for(let indice in notas) {
    indices += indice + ' '
}
console.log(indices)