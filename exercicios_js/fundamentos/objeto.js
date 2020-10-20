const produto = {}
produto.nome = 'Celular Mega'
produto.preco = 133.80
produto['tem desconto'] = 0.1 // Não usar.

console.log(produto)
console.log(produto.nome)

// nomes podem se repetir loja.produtos.produtos
const loja = {
    nome: 'Lojinha',
    cidade: 'Brasília',
    produtos: {
        produtos: ['Arroz1', 'Arroz2'],
        precos: [5, 2]
    }
}

console.log(loja)
console.log(loja.produtos.produtos)
console.log(typeof loja.produtos.produtos)
