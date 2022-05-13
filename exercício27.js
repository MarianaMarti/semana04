const inverter = objeto => {
    const novoObjeto = Object.entries(objeto).map(
        array => [array[1],array[0]]
    )
    return Object.fromEntries(novoObjeto)
}
