console.log(7 / 0.000001)

/*Estranho*/
console.log(7 / 0) // Retorna tipo Infinity
console.log('7' / 2)
console.log('texto' * 2) // Not a number
console.log(0.1 + 0.7) // Atenção nos pontos flutuantes

//console.log(10.toString()) /Erro, precisa usar parenteses - evita o uso de variável
console.log((10).toString())
const soma = 0.1 + 0.7
console.log(soma.toFixed(2))
