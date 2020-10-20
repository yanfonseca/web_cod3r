console.log(typeof console)

console.log(Math.ceil(6.1))

const obj1 = {}

obj1.nome = 'Bola'
obj1['endereco'] = 'Muito bom'
obj1['endereco com espaco'] = 'Evitar o uso'
console.log(obj1)

function Obj(nome) {
    // função construtora
    // this torna visivel ao objeto
    // o nome associado(visivel) ao objeto para objetos Obj. 
    // Se fosse um var declarado na função o obj.nome não acessaria o valor
    this.nome = nome
    this.exec = function () {
        teste()
        console.log('Exec...')
    }

    function teste() {
        console.log('É um teste.')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

// obj3.teste()
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj3)
obj3.exec()
