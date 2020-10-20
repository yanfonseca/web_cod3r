// Armazenar uma função em  uma variável

// funçao anônima
// Não precisa informar o nome, mas caso seja informado será visível quando for debugar o código
// Mesmo assim normalmente o nome não é informado
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implícito - função arrow
const subtracao = (a, b) => a - b

console.log(subtracao(5, 2))

const imprimir2 = a => console.log(a) // quando existe somendo um parâmetro, pode-se omitir ()
imprimir2('legal')

const imprimir3 = a => console.log('teste')
imprimir3()
