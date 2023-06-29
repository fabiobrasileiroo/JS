function nomeDoMes(mes){
if(mes >= 1 && mes <= 12) {
    switch(mes){
        case 1:
            return console.log('Janeiro')
            break
        case 2:
            return console.log('Feveiiro')
            break
        case 3: 
            return console.log('Março')
            break
        case 4:
            return console.log('Abril')
            break
        case 5:
            return console.log('Maio')
            break
        case 6:
            return console.log('Junho')
            break
        case 7:
            return console.log('Julho')
            break
        case 8: 
            return console.log('Agosto')
            break
        case 9:
            return console.log('Setembro')
            break
        case 10:
            return console.log('Outubro')
            break
        case 11:
            return console.log('Novembro')
            break
        case 12:
            return console.log('Dezembro')
            break
        default:
            return console.log('valor que não se enquadra no 1 a 12',mes)
    }
    
}
}
nomeDoMes(1)
function receberNomesDoMes(numero){
    const mapeamento = ['janeiro','feveiro']
    return mapeamento[--numero]
}
receberNomesDoMes(1)