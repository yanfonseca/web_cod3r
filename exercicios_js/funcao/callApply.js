function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 - imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4599,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) //NaN
global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())


const carro = {
    preco: 49990,
    desc: 0.2
}

console.log(getPreco.call(carro)) // passa o contexto do objeto para a função getPreco
console.log(getPreco.apply(carro)) // apply funciona da mesma forma que o call

console.log(getPreco.call(carro, 0.17, '$')) //passa o contexto do objeto para a função getPreco e depois parâmetros em sequência
console.log(getPreco.apply(carro, [0.17, '$'])) // da mesma forma que o call só que os parâmetros como array