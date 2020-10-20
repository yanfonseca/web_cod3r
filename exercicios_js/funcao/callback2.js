const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
let notasBaixas = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback
//como filter do python, so que a forma de informar o array é diferente
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

//com callback e arrow function
const notasMenor7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenor7)
console.log(notasBaixas3)
