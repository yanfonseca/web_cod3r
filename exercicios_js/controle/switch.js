// nao precisa de chaves dentro de um case
// e pode escrever varias linhas tambem
// pode colocar dos cases em sequencia ou na mesma linha
// switch() nao retorna verdadeiro ou falso
// quando executa um case nao sai do swith case, só sai com a palavra break. (atenção se não vai executando tudo...)
// Executa o código abaixo do case que entrar.
// nao pode usar intervalos <= >= e etc e nem (valor1, valor2)
// se o default nao ficar no final entao é necessário adicionar um break
// Não é usado bloco de código({}) no switch

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            //console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break

        default:
            console.log('Nota inválida')

    }
}

imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(6.5)
imprimirResultado(2.95)
imprimirResultado(-2)