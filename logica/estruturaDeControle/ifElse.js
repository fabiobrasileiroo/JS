const hora =18 
let saudacao

if(hora< 13) {
    saudacao = 'bom dia'
} else {
    if(hora<18){
    saudacao = 'Boa tarde'
    }else {
    saudacao = 'Boa noite'
}
}
console.log(saudacao)
//Duas formas de escrever mas essa e melhor associando o proximo senteça do else para if
if(hora < 13) {
    saudacao = 'dia'
} else if(hora < 18) {
    saudacao = 'tarde' 
} else {
    saudacao = 'noite'
} 
console.log(saudacao)