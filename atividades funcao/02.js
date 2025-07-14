function triangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
        console.log(`O triângulo é Equilátero, logo, os 3 lados são iguais. Lado 1: ${lado1} / Lado 2: ${lado2} / Lado 3: ${lado3}`)
    } else if (lado1 != lado2 && lado1 != lado3 && lado2 !== lado3) {
        console.log(`O triângulo é Escaleno, logo, os 3 lados são diferentes. Lado 1: ${lado1} / Lado 2: ${lado2} / Lado 3: ${lado3}`)
    } else {
        console.log(`O triângulo é Isósceles, logo, dois lados são iguais. Lado 1: ${lado1} / Lado 2: ${lado2} / Lado 3: ${lado3}`)
    }
    
}

triangulo(1, 1, 3)