//contexto - arquivo
const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}
//minhaFuncao()

function exec() {
    const valor = 'Local'
    //minhaFuncao.bind(exec) não muda o contexto porque exce também está no global
    minhaFuncao(valor) // está no contexto global

    teste = () => console.log(valor) //está no contexto da função
    teste()

}

exec()

const obj = {
    valor: 'novo'
}

function minhaFuncao2({ valor }) {
    console.log(valor)
}

minhaFuncaoNova = minhaFuncao2.bind(obj)
minhaFuncaoNova(obj)