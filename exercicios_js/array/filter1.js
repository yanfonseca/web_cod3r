const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 118.99, fragil: false }
]
//mds mozilla javascript
console.log(produtos)
console.log('#####')

isFragil = function (p) {
    return p.fragil
}
isCaro = p => {
    return p.preco >= 500
}
console.log(produtos.filter(isFragil).filter(isCaro))