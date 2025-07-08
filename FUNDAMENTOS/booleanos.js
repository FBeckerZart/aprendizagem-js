let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // !! ele mostra a origem da variavel em True ou False
console.log(!false) // ! ele inverte uma resposta True para False e vice e versa

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"Texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Para finalizar...")
console.log(!!("" || null || 0 || ""))

let nome = "Fred"
console.log(nome || "Desconhecido")