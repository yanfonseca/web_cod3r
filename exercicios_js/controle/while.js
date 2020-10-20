function getInteiroAleatorioEntre(min, max) {
    if (max < min) [max, min] = [min, max]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

// while não se sabe a quantidade previamente
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima')