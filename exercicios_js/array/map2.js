const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'

]

// Retornar um array apenas com os preços
// 1
const toObjeto = carrinho.map((e) => JSON.parse(e))
const getPreco = (e) = toObjeto.map((e) => e.preco)

console.log(getPreco)

// 2
const paraObjeto = json => JSON.parse(json)
const preco = produto => produto.preco
const resultado = carrinho.map(paraObjeto).map(preco)

console.log(resultado)