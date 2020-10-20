
const notas = [6.7, 7.4, 9.8, 8.1]

//for in retorna os index

//evitar uso, existem alternativas melhores
for (let i in notas) {
    console.log(`nota_${i} = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}