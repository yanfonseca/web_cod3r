const pai = {
    nome: 'Pedro', corCabelo: 'preto'
}
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    },
    teste: {
        value: '123 testeando'
    }
})

console.log(filha2.nome)
filha2.nome = 'Carla' //Não é possível alterar
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

//Usando object.create(class, {}) é necessário informar algo sobre o parâmetro como value, writable, da forma acima
console.log(filha2.teste) //Acessível, ok!

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


//Para descobrir as propriedades recebidas por herança
//objeto.hasOwnProperty(nomedapropriedade)
for (let key in filha2) {
    console.log('prints', key)
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`)
}

const objNome = {
    nome: 'Julio'
}

console.log(objNome.hasOwnProperty('nome')) //ok!

const texto = 'nome'
console.log(objNome.nome, objNome['nome'], objNome[texto])