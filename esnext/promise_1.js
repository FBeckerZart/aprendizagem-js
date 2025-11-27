let p = new Promise(function(cumprirPromesa) {
    cumprirPromesa(["Ana", "Bia", "Carlos", "Daniel"])
})

function primeiroElemento(array) {
    return array[0]
}

p
    .then(primeiroElemento)
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))