function filtrarNumeros(array){
    let numerosFiltrados = []

    for (let i = 0; i < array.lenth; i++) {
        if (typeof array[i] === 'number') {
            numerosFiltrados.push(array[i])
        }
    }
    return numerosFiltrados
}
const