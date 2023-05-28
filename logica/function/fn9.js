function somar1(a) {
    return function (b) {
        return a + b
    }
}
const s = somar1(1)(2)
console.log(s)