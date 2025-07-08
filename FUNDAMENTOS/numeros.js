const peso1 = 1.492391287938
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

console.log(media.toFixed(2)) // Usado para limitar a quantidade de números que vão mostrar após a virgula
console.log(media.toString(2)) // Em binário
console.log(typeof media) // Tipo do dado
console.log(typeof Number) // Função