//outra forma para criar objeto
const produto = new Object //objeto vazio
console.log(produto)

produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logadouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {

    }
}

console.log('objeto carro', carro)

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logadouro'] = 'Av Gigante'
console.log('objeto carro atualizado', carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log('objeto carro deleted', carro)

console.log(carro.condutores) // não gera problema, como condutores não existem mais - undefined
console.log(carro.condutores.length) //gera problema porque eu quero um atributo de algo que é undefined
