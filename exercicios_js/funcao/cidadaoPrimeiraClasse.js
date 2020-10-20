// Função em JS é First-Class Object(Citizens). Trabalha função como dado

//criando da forma literal
function fun1() { }
console.log(fun1()) // retorna undefined

//armazenar em uma variável
const fun2 = function () { } //função anônima
console.log(fun2())

//armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2] //função anônima recebendo parâmetros
console.log(array[0](10, 20))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj)
console.log(obj.falar())

//passar função como parâmetro
function run(fun) {
    fun()
}
run(function () { console.log('Executando...') })

//uma funcao pode retornar/conter uma função. Inner/outer
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

console.log(soma)
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)