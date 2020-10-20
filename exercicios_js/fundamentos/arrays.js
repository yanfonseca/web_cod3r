const valores = [7.2, 8.9, 5.5]
console.log(valores[0], valores[1])
console.log(valores[3]) // Elemento não existe - mostra undefined

valores[3] = 100
console.log(valores[3])
console.log(valores)
console.log(valores.length) // diferente do python, o length é uma propriedade.

//altera o array valor - adiciona ao array - pensar na ideia do git push. É o mesmo que o append do python.
valores.push({ id: 'teste' }, null, 'outro teste')
console.log(valores)
console.log(valores.length)

console.log(valores.pop()) //Apaga o último dado. Altera o array valor
console.log(valores)

console.log(typeof valores) // array é do tipo object no js

