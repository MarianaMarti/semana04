const inverso = parametro => {
    switch (typeof(parametro)){
        case 'boolean':
            return !parametro
            break
        case 'number':
            return parametro*(-1)
            break
        default: 
            return `booleano ou números esperado, mas o parâmetro é do tipo ${typeof(parametro)}`
    }
}