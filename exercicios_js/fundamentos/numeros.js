const peso1 = 1.0
const peso2 = Number('2.3')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //1.0 é considerado inteiro, 1.2 é não inteiro.
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.356696
const avaliacao2 = 8.996694

const media = (avaliacao1 * peso1 + avaliacao2 * peso2) / (peso1 + peso2)

console.log(media.toFixed(3))
console.log(media.toString())
console.log(media.toString(2)) // passando o valor 2, tranforma em número binário
console.log(typeof media)
console.log(typeof number)
console.log(typeof Number)