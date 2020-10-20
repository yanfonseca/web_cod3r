// Contexto léxico - a função arrow foi criando dentro do contexto Pessoa, então 
// É possível acessar pelo this
// Essa é grande vantagem da função arrow. this fica fixo, não precisa usar o bind e nem chamar usando o self.

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

