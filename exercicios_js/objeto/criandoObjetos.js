//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object //Usando a função construtora
console.log(obj2)

const obj3 = new Object({ nome: 'nome', idade: 19 })
console.log(obj3)
console.log(obj3.idade)

//Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //variável visível - é possível ser alterado. Torna o atributo público. preco e desc são privados
    this.getPrecoComDesconto = () => preco * (1 - desc)
    // pode usar o return com função arrow
    //{
    //return preco * (1 - desc)
    //}
}

const p1 = new Produto('Caneta', 7.99, 0.15)
console.log(p1.nome)

p1.nome = 'Caneta Nova'
console.log(p1.nome, p1.getPrecoComDesconto())

const p2 = new Produto()
p2.nome = 'Caderno'
console.log(p2)

//função factory - fabrica(retorna) algo: objeto, funcao

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
console.log(f1)
console.log(f1.getSalario())

// Object.create
const filha = Object.create(null)
console.log(filha)
filha.nome = 'Ana'
console.log(filha)

const ehopai = new Object
Object.prototype.teste = 'Esse é um teste'
console.log(Object.prototype.teste)

const novoFilho = new Object()
console.log(novoFilho.teste)

const outroNovoFilho = Object.create(null)
console.log(outroNovoFilho) //prototype é null

//transformar um json em objeto
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON)
console.log(fromJSON.info)

