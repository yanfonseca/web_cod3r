// Closure é o escopo criado quando função é declarada
// Permite acessar e manipular variáveis externas à função

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // funcao dentro foi declarada no contexto fora e nao no contexto do módulo