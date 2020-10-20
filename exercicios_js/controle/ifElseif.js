console.log(typeof Number)

//adicionando atributo no prototype a Number, então, todos do tipo number recebem a função entre
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
//O último else é opcional
const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
    console.log('fim')
}

// const numero = 10
// console.log(numero.entre(9, 20))

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.2)
imprimirResultado(-1)
imprimirResultado(11)
