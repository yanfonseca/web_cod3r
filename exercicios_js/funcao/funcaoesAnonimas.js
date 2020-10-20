const soma = function teste(x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) { return x - y })

imprimirResultado(3, 4, (x, y) => x * y) //arrow é sempre anônima

//duas formas de passar funções para objeto pessoa
const pessoa = {
    falar: function () {
        console.log('Opa')
    },
    funcaoopa() {
        console.log('funcao opa')
    }
}

pessoa.falar()
pessoa.funcaoopa()

//padrao observer