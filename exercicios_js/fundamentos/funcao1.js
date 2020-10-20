// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Funciona mas retorna NaN
imprimirSoma(2, 3, 4, 5) //Funciona mas soma só os dois primeiros
imprimirSoma() // Retorna NaN

function soma(a, b = 10) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) //NaN

