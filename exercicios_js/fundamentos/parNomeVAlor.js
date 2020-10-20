// par nome/valor
// Atenção ao escopo das variáveis
const saudacao = 'Opa' // Contexto léxico 1 - É o local físico que a variável é definida no código

function exec() {
    const saudacao = 'Fala'
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    endereco: {
        logadouro: 'Rua muito legal',
        numero: 123,
        nome: 'Muito bom'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.endereco.nome)