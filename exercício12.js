const removerPropriedade = (objeto, propriedade) => {
    const copia = {...objeto}
    delete copia[propriedade]
    return copia
}


