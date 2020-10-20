// Nao gera erro porque acontece o hoisting. Sabe que a variável existe, mas ainda não sabe o valor.
console.log('a = ', a) //var undefined
var a = 2 // permite o hoisting
console.log('a = ', a)

// o mesmo que
// var a
// console.log('a = ', a)
// a = 2
// console.log('a = ', a)

// esse comportamento é o mesmo dentro de uma função
// function teste() {
//     console.log('a = ', a) // Nao gera erro porque acontece o hoisting.
//     var a = 2
//     console.log('a = ', a)
// }

// teste()

console.log('com let - não sofre hoisting')
//console.log('a = ', b) //retorna erro
let b = 2
console.log('a = ', b)