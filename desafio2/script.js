function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var msg = document.getElementById('erro')
    if (fAno.value.length == 0 || fAno.value > ano ) {
        msg.innerHTML = '[Erro] Verificar os dados e tente novamente!'
        erro.style.color = '#D2122E'
    } else {
        var fsex = document.getElementByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsec[0].checked) {
            gênero = 'Homem'
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    }
}