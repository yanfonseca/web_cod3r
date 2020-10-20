console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('') //this porque pega o objeto de string. split transforma em array e com isso é possível usar outros métodos
}

console.log('Escola Cod34.'.reverse())//dessa forma um novo método foi criado para todas as variáveis do tipo string 

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

//Não substitua comportamentos nativos de funções da api do js
//Não faça o que está abaixo
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())