const sorteio = numero => {
    let numSorteado = (Math.random()*(10) + 1).toFixed(0) 
    if(numSorteado == numero) 
        return `Parabéns! O número sorteado foi o ${numero}` 
    else 
        return `Que pena! O número sorteado foi o ${numSorteado}`
}

