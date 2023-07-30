function compras(trabalho1,trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprartv50 = trabalho1 && trabalho2
    const comprarTV32 = trabalho1 != trabalho2  
    const manterSaudavel = !comprarSorvete
    return {comprarSorvete, comprartv50, comprarTV32, manterSaudavel}

}
console.log(compras(false,false))
