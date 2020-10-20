//recurso criado 2015
//forma diferente de escrever 
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}
// é a forma de se fazer mas por trás é a mesma ideia de protótipo
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }

}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)