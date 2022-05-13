const removerVogais = string => [...string].filter(char => 
    !(char === 'a'||char === 'e'||char === 'i'||char === 'o'||char === 'u')).join('')
