// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro' // muda o dado(os atributos) mas não o objeto pessoa
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }
// Não é possível atribuir para pessoa, somente pessoa.algumacoisa

Object.freeze(pessoa) //Torna o objeto constante
pessoa.nome = 'Maria' //Nada do objeto pode ser alterado(modificar objeto e alterar atributos) 
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

//existe unfreeze?
