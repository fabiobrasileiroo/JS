function rand ({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
resultado = (rand(obj))
console.log(rand({}))
console.log( rand({min: 500}))
//console.log(rand()) volta um erro

console.log("Valor gerado:", resultado);
console.log("Mínimo:", obj.min);
console.log("Máximo:", obj.max);