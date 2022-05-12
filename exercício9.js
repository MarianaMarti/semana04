const repetir = (elemento, vezes) => {
    final= []
    for (let i = 0; i < vezes; i++)
        final.push(elemento)
    return final
}
 

console.log(repetir("código",3))