function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    // Posso lançar valores e mensagem
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}


function imprimirNomeGritado(obj) { //recebe objeto
    try {
        console.log(obj.name.toUpperCase() + '!!!') //acessa objeto

    } catch (e) {
        tratarErroELancar(e)
    } finally { //finally sempre é executado, com ou sem erro.
        console.log('final')
    }
}

const obj = { name: 'Roberto' } //atenção ao nome do atributo
imprimirNomeGritado(obj) //Cannot read property 'toUpperCase' of undefined

console.log('segundo objeto') //atenção ao nome do atributo
const obj2 = { nome: 'Roberto' } //ERRO
imprimirNomeGritado(obj2) //Cannot read property 'toUpperCase' of undefined