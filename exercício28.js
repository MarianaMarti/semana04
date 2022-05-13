const filtrarPorQuantDeDigitos = (array, dig) => array.filter(num => num / Math.pow(10, dig-1)>=1 &&
num / Math.pow(10, dig-1) < 10 )

