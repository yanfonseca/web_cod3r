
//Estranho: É possível passar valores para uma função que não pede que esses valores sejam informados
//Tais valores podem ser acessados através do array arguments - forma de acessar considerada mais antiga, tem uma forma melhor.

function soma() {
    let soma = 0
    for (i in arguments) { //arguments é um array
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1, 2))
console.log(soma(1, 2, 3))

console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('a', 'b', 'c'))

