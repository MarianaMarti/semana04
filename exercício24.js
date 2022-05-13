const contarChar = (char, string) => {
    const array = string.split("")
    let i = 0
    function contador(elemento){
        if(char === elemento)
            i++
    }
    array.forEach(contador)
    return i
}

