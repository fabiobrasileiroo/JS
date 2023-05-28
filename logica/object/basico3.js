const cliente = {
    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 134,
        complemento: 'Apto 101 Bloco B',
        pontosRef: [
            {nome:'Delphina Azzis', muitoProximo: true},
            {nome:'Bobs', muitoProximo:false},
        ],
        nomeFilhos: ['Bia', 'Carlos', 'Gabriel']
    }
}
console.log(cliente['endereco']['pontosRef'])
console.log(cliente.endereco.pontosRef[1])