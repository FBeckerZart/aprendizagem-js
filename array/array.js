console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array("Bia", "Carlos", "Ana")
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Ana"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = "Paulo"
aprovados.push("Abia") // .push adiciona valores dentro do array na última posição
console.log(aprovados.length)

aprovados[9] = "Rafael"
console.log(aprovados.length) // .lenght mostra qual o tamanho do array
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // .sort organiza o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ["Bia", "Carlos", "Ana"]
aprovados.splice(1, 1) // Explicação no arrayMetodos.js
console.log(aprovados)