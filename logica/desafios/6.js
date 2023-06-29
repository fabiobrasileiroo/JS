/*function inverso(valor){
    if(typeof valor ===  'Boolean'){
        return !valor
    }else if(typeof valor === 'Number'){
        return -valor
    } else {
        return `booleano ou`
    }
}*/
function inverterValor(parametro) {
    if (typeof parametro === 'boolean') {
        return console.log(!parametro)
    } else if (typeof parametro === 'number') {
        return console.log(-parametro)
    } else {
        return console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${typeof parametro}`)
    }
}
inverterValor(true)
inverterValor(2)
inverterValor("texto")