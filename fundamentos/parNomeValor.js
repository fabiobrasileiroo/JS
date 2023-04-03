//par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'fala'
    return saudacao
}

const cliente = {
    nome: 'Fabio',
    idade: 20,
    peso: 65,
    endereco: {
        logradouro: 'Pamonha do Sul',
        numero: 123
    }
}


console.log(saudacao)
console.log(cliente)
console.log(exec())