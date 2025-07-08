const escola = "Cod3r"

console.log(escola.charAt(4)) /* .charAt serve para verificar qual caracter 
                              está no número selecionado, por exemplo (4) = r */

console.log(escola.charAt(6))
console.log(escola.charCodeAt(3)) /* .charCodeAt é para pegar o caracter da posição pedida 
                                  e retornar o valor em unicode */

console.log(escola.indexOf('d')) // .indexOf é para saber se o caracter pedido está na string

console.log(escola.substring(1)) 
console.log(escola.substring(0, 3)) /* .substring (x, y) delimita o caracter mínimo 
                                    e o máximo que é para pegar e mostrar sem mostrar o primeiro */

console.log("Escola ".concat(escola).concat("!")) 
console.log("Escola "+ escola + "!")
console.log(escola.replace(3, "e")) // .replace vai trocar o caracter que selecionar pelo caracter que quiser

console.log("Ana,Maria,Pedro".split(",")) // .split ele faz um array