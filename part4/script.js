function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    if  (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        erro.innerHTML =('[ERRO] Falta dados!')
        erro.style.color = 'red'
    }else {
          res.innerHTML = 'Contando: '
          let i = Number(ini.value)
          let f = Number(fim.value)
          let p = Number(passo.value)
          if(p <= 0) {
            window.alert('Passo inválido! Considerando Passo1')
            p = 1
          }
          if(i < f) {
            // Contagem crescente
            for(let c = i;c <=f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
          }
    } else {
        // Contagem regressiva
        for(let c = i; c >= f; c-= p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } 
    res.innerHTML += `\u{1F3C1}` 
}
}