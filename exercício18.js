const despesasTotais = array => {
    let soma = 0
    function fsoma(elemento){
        soma += elemento.preco
    }
    array.forEach(fsoma)
    return soma
}

