/*function parImp(n) {
    if(n%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}
let res = parImp(11)// o 11 é meu parâmetro
console.log(res)

function soma(n1,n2) {
    return n1+ n2
}

console.log(soma(2))
*/
function fatorial(nn) {
    let fat = 1
    for(let c = nn; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

// recursividade 
function fatorial(n) {
    if (n == 1){
    return 1
   } else {
    return n * fatorial(n-1)
   }
}

console.log(fatorial(5))