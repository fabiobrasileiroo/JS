function inverso(valor){
    if(valor ==  Boolean){
        return console.log("false")
    }else if(typeof valor == Number){
        return -valor
    }
}
inverso(false)