// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 30,
    endereco: {
        logradouro: 'Rua abc',
        numero: 1000
    }
}

//Operador destructuring para objetos {}
const { nome, idade } = pessoa // Não é atribuição. Pega nome e idade do objeto pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //criando novas variáveis
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa //criando novas variáveis
console.log(sobrenome, bemHumorada)
console.log(pessoa) // A nova variável não altera o objeto 

const { endereco: { logradouro, numero, cep = 'teste' } } = pessoa //criando novas variáveis
console.log(logradouro, numero, cep)
console.log(pessoa) // A nova variável não altera o objeto 

//const { conta: { ag, num } } = pessoa //erro porque não existe nenhum caminho até ag, num.
//console.log(ag, num)