function receberSomenteOsParesDeIndicesPares(numeros){
    var resultado = []
    for (var i = 0; i < numeros.length; i++) {
        if(i% 2 === 0 && numeros[i] % 2 === 0 ){
            resultado.push(numeros[i])
        }
    }
    return resultado
}
console.log(receberSomenteOsParesDeIndicesPares([1,2]))