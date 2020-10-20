const nome = 'yan'
const concatenar = 'Ola ' + nome + '!'

console.log(concatenar)

const template = `
    Teste
    do
    ${nome}!`

console.log(template)

console.log(`1 + 1 = ${1 + 1}`)

const maiusculo = texto => texto.toUpperCase()
console.log(`Ei... ${maiusculo('senhor')}!`)