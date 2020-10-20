const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}
//__proto__ objeto pai
console.log(ferrari.__proto__) //existe mas está vazio
console.log(Object.prototype)
console.log(ferrari.__proto__ === Object.prototype) //objeto aponta para o prototype
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // o prototype do Object não tem tem nenhum prototype, por isso é nulo
// O atributo prototype SOMENTE é encontrado em funções

function MeuObjeto() { }

console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype)
console.log(MeuObjeto.prototype)

