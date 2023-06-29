function filtrarNumeros(array){
    var numeros = []

    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number'){
            numeros.push(array[i])
        }
    }
    return numeros
}

var arrayOriginal = [1,'fabio',2,'terceiro',10]

console.log(filtrarNumeros(arrayOriginal))