function fun({a, b}){
    console.log(a)
    console.log(b)
}
const obj = {a:2, b:4}
fun(obj)

const pessoa = {
    nome: 'Fábio',
    idade: 20,
    endereco: {
        logradouro: 'Rua. Estudos Unidos',
        numero: 80
    }
}
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n , idade: i} = pessoa
console.log(n,i)

const {lastname, happy = false} = pessoa
console.log(lastname, happy)

const {endereco: {logradouro, numero, cep = 609}} = pessoa
console.log(typeof( numero+ cep +logradouro))