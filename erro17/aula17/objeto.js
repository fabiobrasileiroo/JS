let amigo = {nome:'José',
sexo:'M',
peso: 83.4,
engorda(p=0){
    console.log('Engordou')
    this.peso += p
}}
console.log(amigo.nome)
amigo.engorda(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)