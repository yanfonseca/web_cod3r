const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) // acessando saudacao no contexto do objeto
    }
}

pessoa.falar()

const falar = pessoa.falar //this agor aponta para o contexto global e por isso não encontra saudacao
falar() //conflito entre paradigmas: function e OO

// Informar ao bind() o objeto que você quer analisar o this, dessa forma, é informado o contexto do this que se quser acessar. 
//A função falar de pessoa, do objeto pessoa, não é alterada
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


