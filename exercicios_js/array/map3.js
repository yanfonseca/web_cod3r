Array.prototype.map2 = function (callback) {
    const newArray = []
    for (i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'

]

const paraObjeto = json => JSON.parse(json)
const preco = produto => produto.preco
const resultado = carrinho.map2(paraObjeto).map2(preco)

console.log(resultado)