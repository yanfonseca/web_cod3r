//operador ... rest(juntar) spread(espalhar)
//usar rest como parâmetro de função

//usar spread com objeto
const funcionario = {
    nome: 'maria',
    salario: 12345.33
}
const clone = { ativo: true, ...funcionario } // é uma cópia, referências de memória diferentes
console.log(clone)

//usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']

const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)