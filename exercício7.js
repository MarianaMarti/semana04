const estaEntre = (num, min, max, inclusivo) => {
    if(!(num > min && num < max)){
        if(inclusivo){
            return num === max || num === min
        }
        else return false
    }
    else return true
}
