const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }
const obj3 = { a, b, essec: c }
console.log(obj1, obj2, obj3)

const nomeAttr = 'nota' //nota será o atributo do objeto
const valorAttr = 7.97

const obj4 = {}
obj4[nomeAttr] = valorAttr
console.log(obj4)
console.log(obj4.nota)

const obj5 = {
    [nomeAttr]: valorAttr
}
console.log('obj5', obj5)

const obj6 = {
    funcao1: function () {
        //
    },
    funcao2() {
        //pode ser declarada diretamente, não precisa do function e do nome
    },

    funcaoarrow: (a) => console.log('funcao arrow')
    // e funcao arrow?

}

obj6.funcaoarrow('naoimporta')

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions