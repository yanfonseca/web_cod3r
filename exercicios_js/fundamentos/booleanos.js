let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
//Negação '!'. Força para ser booleano. Qualquer número diferente de zero é considerado true.
//Usar !! em um retorno encontrado faz com que o retorno seja convertido para um boleano
console.log(!isAtivo)
console.log(!!isAtivo)
console.log(!!true)

// Resolve para verdadeiro - true
console.log('os verdadeiros...')
console.log(!!2)
console.log(!!-2)
console.log(!!' ')
console.log(!!'a')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 2)) //console.log(isAtivo) vai retornar 2
console.log(!!(isAtivo = true))

console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = 0))
console.log(!!(isAtivo = false))

console.log('para finalizar')
console.log(('' || null || 0 || ' ')) // o ' ' faz com que seja true, uma forma alternativa ao if
console.log(('' || null || 0 || 'retornou' || 123)) //retorna o que é verdadeiro
console.log(('' || null || 0 || '')) // retorna nada
console.log(!!('' || null || 0 || '')) // retorna nada

let nome = 'jota'
let sobrenome = ''
console.log(nome || 'Desconhecido') //Na falta do primeiro parâmetro o segundo é mostrado
console.log(sobrenome || 'Desconhecido')
console.log(!!(sobrenome || 'Desconhecido')) //converteu para boleano