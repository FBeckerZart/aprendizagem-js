function bhaskara(a, b, c) {
    const delta = Math.pow(b, 2) - 4*a*c
    if (delta < 0) {
        return "Delta é negativo"
    } 
    
    const raizPositivo = (-b + Math.sqrt(delta)) / (2 * a)
    const raizNegativo = (-b - Math.sqrt(delta)) / (2 * a)

    return [raizPositivo, raizNegativo]
}
console.log(bhaskara(3, -5, 12))
console.log(bhaskara(1, -3, 2))