function sempreRetorno() {
    return 1
}
var a = sempreRetorno() + 2
console.log(a)

function teste(retorno) {
    if(retorno) {
        return "true"
    } 
        return "false"
}
let texto = teste(true)
console.log(texto)

let texto2 = teste(false)
console.log(texto2)

const b = t => {
    return t ? "verdade" : "falso"
}
console.log(b(false))

function te(retorno1) { 
    return retorno1 ? "trueee" : "falseee"
}
console.log(te(true))