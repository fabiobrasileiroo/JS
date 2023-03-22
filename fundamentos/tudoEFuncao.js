console.log(typeof Object)

class a {}
console.log(typeof a)

// Função sem retorno

function imprirmirSoma (a, b) {
    console.log(a + b)
}
/*
imprimirSoma(2, 3)
imprimirSoma(2)
declaro fora de console.log
*/
imprimirSoma(2,3,4,1)
// Função com retorno

function soma(a, b = 1) {// coloquei o b com um valor padrão se eu não colocar ele no console ele ja vem como essa valor padrão
    return a + b
}
console.log(soma(2,3))