// this é associado ao contexto que a função foi escrita
// funcao arrow SEMPRE é uma funçao anônima, por isso tem que ser armazenada em uma variável ou constante
// this na arrow function nunca é alterado e respeita sempre o contexto no qual a função foi criada

//função anônima normal
let dobro = function (a) {
    return 2 * a
}

//função arrow
dobro = (a) => {
    return 2 * a
}

//Se a função tem apenas um parâmetro,no caso é o a, pode-se omitir os parenteses
dobro = a => 2 * a //return implícito usado para uma função de uma única linha
console.log(dobro(Math.PI))

let ola = function () { //funcao anônima
    return 'Olá'
}
console.log(ola())
ola = () => 'Olá' //função sem parâmetros, usar (). É a forma padrão.
console.log(ola())
ola = _ => 'Olá' // Usar '_' convenção. O "_" é um parâmetro, mas em js parametros podem ser ignorados
console.log(ola())
