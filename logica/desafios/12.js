//var a = 1
//var b = '1' 
//console.log(Object.is(a,b))

function removerPropriedade(objeto,propriedade){
    const copiaObjeto = { ...objeto}

    if(propriedade in copiaObjeto){
        delete copiaObjeto[propriedade]
    }
    return copiaObjeto
}
const pessoa = {
    nome: 'Fábio',
    idade: 30,
    cidade: 'São Paulo'
}

const pessoaSemIdade = Object.is(removerPropriedade(pessoa, 'idade'))
console.log(pessoaSemIdade)
console.log(pessoa)