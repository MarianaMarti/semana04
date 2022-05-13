const segundoMaior = array => {
    let maior2 = array[0]
    let maior = array[0]
    for(i in array){
        if(array[i]>=maior){
            maior2 = maior
            maior = array[i]
        }
    }
    return maior2
}

