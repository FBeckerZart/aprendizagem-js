// Object.preventExtensions -> não consegue adicionar atributos, mas consegue alterar e excluir.
const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag: "promoção" 
})
console.log("Extensível:", Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "Borracha escolar branca"
delete produto.tag
console.log(produto)

// Object.seal -> não consegue nem adicionar nem excluir atributos, só alterar
const pessoa = {nome: "Juliana", idade: 35}
Object.seal(pessoa)
console.log("Selado:", Object.isSealed(pessoa))

pessoa.sobrenome = "Silva"
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze -> congela completamente, não consegue fazer nenhuma ação.