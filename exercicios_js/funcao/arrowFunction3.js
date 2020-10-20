//funcao normal
//por default o this === global
let comparaComThis = function (param) {
    console.log(this === param)

}

//no node global
//no brower window
comparaComThis(global)
comparaComThis(this) //false - estranho

const obj = {}
comparaComThis = comparaComThis.bind(obj) // trocou para o contexto do objeto
comparaComThis(global)
comparaComThis(obj) // objeto e comparaComThis estão no global

// a função ARROW é definida em um módulo do node, por isso estará SEMPRE no contexto do módulo
// ja uma funcao normal, sempre estará no global
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global) //false
comparaComThisArrow(this)
comparaComThisArrow(module.exports)

//bind

comparaComThisArrow = comparaComThisArrow.bind(obj) //Nao é possível mudar o contexto de uma arrow function
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)