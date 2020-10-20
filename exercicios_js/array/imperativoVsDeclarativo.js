const alunos = [
    { nome: 'Jõao', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 },
]

// Imperativo
//como tem que ser feito: passo a passo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativa
//o que tem que ser feito
//reuso
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

//declarativa
//  select codigo, nome, email from cliente where ativo = 1
