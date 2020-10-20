//class
//falar está no contexto de Pessoa e dentro do browse pode mudar
class Pessoa {
    constructor(nome) {
        this.nome = nome
        this.obj = {
            nome: nome,
            teste: 'isso é um teste'
        }
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }

}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1.nome)
console.log(typeof p1)
console.log(typeof Pessoa)
console.log(p1.obj.teste)

//função factory
//falar está no contexto do objeto
const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é... ${nome}`),
        func: "É função arrow.",
        apelido: function () {
            console.log(`Apelido de ${nome} é ?`)
        }
    }
}

const p2 = pessoa('João')
p2.falar()
p2.apelido()
console.log(p2.func)

//detalhe que para chamar o método do objeto no browser não tem parênteses
//document.getElementsByTagName('Body')[0].onclick=p2.apelido  