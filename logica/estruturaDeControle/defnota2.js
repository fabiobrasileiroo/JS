const nota1= 8.5
const nota2 = 9.3
const nota3 = 3.3
function minimo(n1,n2) {
    if(n1 >= n2) {
        return n1
    } else {
        return n2
    }
}

function media(n1,n2,n3) {
    const menorNota = minimo(n1,minimo,(n1,n2))
    if(menorNota === n1) {
        return (n2+n3)/2
    } else if(menorNota === n2) {
        return (n1+n3)/2
    } else {
        return (n1,n2)/2
    }
}
function mediaParaStatus(media) {
    if(media >= 7) {
        return "Aprovado"
    } else if(media >= 4) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}
const mediaFinal = media(nota1, nota2, nota3)
const statusFinal = mediaParaStatus(mediaFinal)
console.log(`O resultado final do aluno é ${statusFinal}`)