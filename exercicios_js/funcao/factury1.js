const prod1 = {
    nome: 'laranja',
    preco: '45'
}
//...

//Factury simples - função que retorna objeto
function criarPessoa() {
    return {
        nome: "Ana",
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
