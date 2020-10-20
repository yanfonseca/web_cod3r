//usando o this os atributos e comportamentos ficam acessíveis fora da função Pessoa
function Pessoa(nome) {
    this.nome = nome
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}.`)
    }
    //teste - função fora do this pode ser inicializada ou chamada com o this
    function teste() {
        console.log('teste')
    }

    teste()
}

const p1 = new Pessoa("João")
p1.falar()

p1.nome = 'Maria'
p1.falar()

