let valor
console.log(valor) // É undefied porque a variável não foi inicializada
//console.log(valor2) // It is not definied, nem declarada foi.

//Não tem nenhum valor e não aponta para nenhum endereço da memória, mas foi inicializada
valor = null // Usar para limpar referência de memória, não use indefined
console.log(valor)
//console.log(valor.toString()) //erro!

const produto = {}
console.log(produto)
console.log(produto.preco)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco) //retorna false
produto.preco = null
console.log(produto)
delete produto.preco
console.log(produto)
