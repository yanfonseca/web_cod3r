function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)

console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) //funcaox.apply(obj, params) passa o contexto obj para a funcaox
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 111)
const aula4 = novo(Aula, 'Até breve', 333)

console.log(aula3, aula4)