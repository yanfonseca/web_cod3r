
//setInterval - roda a função informada seguidamente com um tempo de intervalo informado
//setInterval(funcao,tempo)
//informar o contexto para a funcao -> setInterval(funcao.bind(this), tempo)
//'funcao' pode ser uma funcao anônima

function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
    //1000 = 10^-3 segundos = 1 segundo
    //quem dispara é setInterval, a funçao anônima não tem parâmetros 
    //Se não passar this para a função bind temos um problema porque o setIntervalo é chamado em outro contexto
    //Informando o contexto ao bind, então, o contexto da função Pessoa é usado
}

new Pessoa //criação do objeto

