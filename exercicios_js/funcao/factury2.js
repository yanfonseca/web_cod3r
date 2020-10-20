
function criarPessoa(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
        // nome: nome,
        // preco: preco,
        // desconto: 0.1
    }
}

console.log(criarPessoa('notebook', '3000'))
console.log(criarPessoa('ipad', '5000'))


//factury também pode retornar função