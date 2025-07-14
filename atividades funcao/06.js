function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    const calculo = capitalInicial * (1 + taxaDeJuros * tempoDeAplicacao)
    return "O montante da aplicação financeira sobre juros simples é: " + (calculo).toFixed(2)
}

console.log(jurosSimples(1000, 0.05, 3))

function jurosCompostos(capitalInicial1, taxaDeJuros1, tempoDeAplicacao1) {
    const calculo2 = capitalInicial1 * Math.pow(1 + taxaDeJuros1, tempoDeAplicacao1)
    return "O montante da aplicação financeira sobre juros compostos é: " + (calculo2).toFixed(2)
}

console.log(jurosCompostos(1000, 0.05, 3))