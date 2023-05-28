const data = {
    dia: 18,
    mes: 05,
    ano: 2023,
    resultado : function() {
        return `${data.dia}/${data.mes}/${data.ano}`
    }
}
console.log(data.resultado())