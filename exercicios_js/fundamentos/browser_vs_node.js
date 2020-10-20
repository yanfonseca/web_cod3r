let a = 3 //Escopo local

console.log(a)
console.log(this.a)
console.log(global.a) //global equivale ao window do navegador

console.log('###')

global.b = 10
console.log(this.b)
console.log(global.b)
console.log('###')

this.c = 456 //this - exportar para fora do arquivo
console.log(this.c)
console.log(module.exports.c) //igual ao this. this é igual module.exports
console.log(this === module.exports) // comprovação
console.log(global.c)
this.d = 'teste'
console.log(module.exports)
console.log('teste', this)

//node é modularizado enquanto - cada arquivo é um módulo
// É mais comum usar
module.exports = { 'testando': 'variável' }
console.log('aqui', module.exports)


abc = 3 //global - acrescenta diretamente ao escopo global - NÃO FAÇA ISSO! 
console.log(global.abc)

// tudoconsole.log(global)