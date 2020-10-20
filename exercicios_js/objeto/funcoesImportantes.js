const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) //retorna array - [[chave1,valor1],[chave2,valor2]]

Object.entries(pessoa).forEach((e) => {
    console.log(`${e[0]}: ${e[1]}`)
})

//Destructuring - no python é função do *parametro
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//Posso passar mais parâmetros para uma propriedade. É possível passar características. Se é enumerável, writable e etc
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})
console.log(pessoa)

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assing (ECAMAScript 2015) ES6
const dest = { a: 1 } //destino
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 } //o a sobreescreve o a de dest
const obj = Object.assign(dest, o1, o2) // como fazer o unpacking em js nesse ponto
console.log(obj)

// Object.freeze = selado + valores constantes -> é completamente constante
Object.freeze(obj)
obj.c = 1234
console.log(obj)

