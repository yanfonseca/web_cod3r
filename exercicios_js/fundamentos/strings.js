const escola = 'universidade'

console.log(escola.charAt(4)) // Letra do índice 4. (e)
console.log(escola.toLocaleUpperCase())
console.log(escola.charCodeAt(4)) // Valor UNICODE ASCII
console.log(escola.indexOf('i'))

console.log(escola.substring(1))
console.log(escola.substring(2))
console.log(escola.substring(0, 6))

console.log('Escola > '.concat(escola).concat('!'))
console.log('Escola > ' + escola + '!')

console.log('Teste com regex')
console.log(escola.replace(/univers/, 'xxxxxx'))
console.log(escola)
// console.log(escola.replace('u', 'U'))
console.log(escola.replace(/\w/g, 'U')) //Regex

console.log('Um, dois, tres'.split(','))

