// get e set também são utilizados dentro das classes
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create

const sequencia = {
    _valor: 1, // convenção - variável privada
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}
// No caso get e set podem ter o mesmo nome
console.log(sequencia.valor, sequencia.valor) //chama o get
sequencia.valor = 1000 //chama o set
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // Devido a condição o valor não é alterado
console.log(sequencia.valor, sequencia.valor)

const teste = {
    _valor: 10,
    get valor() { return this._valor },
    set valor(val) { this._valor = val }
}

console.log(teste.valor)
teste.valor = 1000
console.log(teste.valor)
