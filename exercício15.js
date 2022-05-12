const retornaPares = array => {
    function pares (elemento){
        return elemento % 2 == 0 && array.indexOf(elemento) % 2 == 0 
    }
    return array.filter(pares)
}

