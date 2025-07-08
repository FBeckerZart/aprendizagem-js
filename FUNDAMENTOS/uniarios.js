let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // pré fixado tem prioridade de mudança, já o pós fixado faz outras ações primeiro
console.log(num2 === num1)
