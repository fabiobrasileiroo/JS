const nota1 = 4 
const nota2 = 4
const nota3 = 3
//media 2 maiores notas media
//media >= 7 aprovado
//media <7 e media >4 recuperacao
//media >=4 reprovado
function teste(){
    if((nota1>nota2 && nota1>nota3)&& nota2>nota3) {
        return nota1 + nota2 
    } else if((nota1>nota2 && nota1>nota3)&& nota2<nota3){
        return nota1 + nota3
    } else if((nota2>nota1 && nota2 > nota3) && nota1>nota3) {
        return nota2 + nota1 
    } else if((nota2>nota1 && nota2> nota3)&& nota1<nota3){
        return nota2 + nota3
    } else if((nota3 > nota1 && nota3 > nota2)&& nota1 > nota2) {
        return nota3 + nota1
    }
    else if((nota3 > nota1 && nota3> nota2)&& nota1 < nota2){
        return nota3 + nota2 
    }
}
const soma =teste()/2
console.log(soma)
function teste1() {
    if(soma>= 7 && soma <=10) {
        return "Aprovado"
    } else if(soma>= 4 && soma<7){
        return "Recuperacao"
    } else {
        return "Reprovado"
    }
}
console.log(teste1())