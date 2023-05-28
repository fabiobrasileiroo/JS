// Função Construtora (Classe) -> Objeto

function Data(dia = 1, mes = 1, ano = 2023) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
    this.exibir = function() {
        return `${ano}/${mes}/${ano}`
    }
}

const d1 = new Data()
console.log(d1)