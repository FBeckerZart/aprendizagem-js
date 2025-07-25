require("./global")

console.log(MinhaApp.saudacao())

MinhaApp.nome = "Eita!"
console.log(MinhaApp.nome) // não funciona por conta do metodo freeze no arquivo global.js