const melhorEstudante = objeto =>{
    let [...notas] = Object.values(objeto)
    let media
    let indiceDoMaior
    let mediaMaior = 0
    for(i in notas){
        let soma = 0
        let tamanho = 0
        let [...notasAluno] = notas[i]
        for(j in notasAluno){
            soma += notasAluno[j]
            tamanho++
        }
        media = soma/tamanho
        if(media >= mediaMaior){
            mediaMaior = media
            indiceDoMaior = i
        }
    }
    let alunoMaiorNota = Object.keys(objeto)[indiceDoMaior]
    return {nome: alunoMaiorNota, media: mediaMaior}
}

