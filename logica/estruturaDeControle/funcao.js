const d1 = 30
const m1 = 5
const a1 = 2023

function exibirData(d,m,a) {
    console.log(`${d}/${m}/${a}`)
}
exibirData(d1, m1, a1)

var a = (d,m,a) => {
    console.log(`${d}-${m}-${a}`)
}
console.log(a(d1,m1,a1))
