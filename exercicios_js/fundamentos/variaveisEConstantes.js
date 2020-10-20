//Declaração da variável
var num_a = 10

//Declaração com let: como regra geral declarar com let e com só pode ser declarada uma vez
let num_b = 400

console.log(num_a, num_b)

var num_a = 30
//let num_b = 8 //erro
num_b = 50

console.log(num_a, num_b)

//Declaração com const: priorizar também o uso de const, 
//para separar o que é mutável do que não é mutável.
const num_c = 1000
const nome = 'texto'
//Não se pode declarar const mais de uma vez, nem criando outra const com mesmo nome de variável
//num_c = 200 //erro
console.log(num_c, nome)

{
    const constante = 'constante'
    console.log(constante)
}

// console.log(constante) //erro