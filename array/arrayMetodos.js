const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop() // O último elemento sai da lista
console.log(pilotos)

pilotos.push("Verstappen")
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift("Hamilton") // adiciona à primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Massa ira sair novamente
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // vai ate o 4 mas sem incluir o 4
console.log(algunsPilotos2)
