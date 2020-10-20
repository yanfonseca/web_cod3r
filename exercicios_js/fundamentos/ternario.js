//funcao arrow
//Operador ternário dentro de uma arrow function
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log('1', resultado(6))
console.log('2', resultado(10))

let nota2 = 10
let status = nota2 >= 7 ? 'Aprovado' : 'Reprovado'
console.log('3', status)

nota2 = 6
status = nota2 >= 7 ? 'Aprovado' : 'Reprovado' //adicionando em uma variável
console.log('4', status)

//Outra forma de definir função arrow
//Ainda usa operador ternário
const resultado2 = nota => {
    return nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado(6), resultado(8))