function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function() {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}
const d1 = criarData(18,05,2023).exibir()
console.log(d1)