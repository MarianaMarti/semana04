const calcularMedia = array =>{
    let soma = 0
    function fsoma (elemento){
        soma += elemento
    }
    array.forEach(fsoma)
    return soma/(array.length)
}

