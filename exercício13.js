const filtrarNumero = (array) => {
    function filtrador(elemento){
        return typeof (elemento) === 'number'
    }
    return array.filter(filtrador)
}



