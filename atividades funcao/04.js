function divisao(dividendo, divisor) {
    let resultado = dividendo / divisor
    let resto = dividendo % divisor
    console.log(`Resultado: ${(resultado).toFixed(2)}`)
    console.log(`Resto: ${resto}`)
}
divisao(2, 3)