const menorNumero = array => {
    let menor = array[0]
    function fmenor(elemento){
        if(menor > elemento)
            menor = elemento
    }
    array.forEach(fmenor)
    return menor
}
