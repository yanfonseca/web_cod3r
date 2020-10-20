// Object.preventExtensions
// deixa excluir atributos mas previne o aumento(adicionar) de atributos do objeto

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // não faz nada no objeto
delete produto.tag
console.log(produto)

// Object.seal. Só deixa modificar os atributos que já existem
const pessoa = {
    nome: 'Juliana',
    idade: 35
}

Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

