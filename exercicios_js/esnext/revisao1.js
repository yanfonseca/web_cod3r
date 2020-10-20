//let const
{
    var a = 2
    var b = 3
    console.log(b)

}
console.log(a)

//Template String
//aceita quebra de linha, diferente de string usando "" e ''

const produto = 'iPad'
console.log(`${produto}
é 
caro!`)

//Destructuring
const [l, e, ...tras] = 'string'
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)