function MeuObjeto() {

}

console.log(MeuObjeto.prototype) //funcao tem prototype

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
//Os objetos criados irão apontar para Object.prototype ou MeuObjeto.prototype?

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Posso guardar função em prototype. Meu nome é ${this.nome}`)
}
console.log(MeuObjeto.prototype) //funcao tem prototype

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // mudando a referencia de Object.prototype para MeuObjeto
obj3.nome = 'Obj3'
obj3.falar()


//Resumindo a loucura

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype) //olha isso
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) //existe mas é nulo

//rever o final do vídeo


