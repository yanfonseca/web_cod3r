function getInteiroAleatorioEntre(min, max) {
    if (max < min) [max, min] = [min, max]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

// while não se sabe a quantidade previamente
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima')

