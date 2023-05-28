//             1   2   3   4   5
const nota = [8.9,9.3,3.3,4.9,5.4]
/*console.log(nota)
console.log(nota[2])
console.log(nota[6])
nota[6] = 5*/
//console.log(nota[6])
let cont = 0
for(let i = 1;i<5;i++){
    console.log(i,nota[i])
    if(i<5){
    cont = cont + 1
    }
}
console.log(cont)