var x = [] 
var i = 0
function repetir(a,b) {

    while(i < b){
        i += 1
        x.push(a)
    }
    return console.log(x) 
}


repetir('ola3',3)