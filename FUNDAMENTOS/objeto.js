const prod1 = {}
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.90
prod1["Desconto Legal"] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {               // isso é diferente de json, é uma notação literal de objetos
    nome: "Camisa Polo",
    preco: 79.99            
}

'{"nome": "Camisa Polo", "preco": 79.99}' // isso está em formato json, que é textual
console.log(prod2)
