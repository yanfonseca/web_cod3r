console.log(soma(3, 4))
//console.log(sub(3, 4)) retorna erro
//console.log(mult(3, 4)) retorna erro

// function declaration
// É possível chamar a função antes no código porque o interpretado carrega as funções antes
function soma(x, y) {
    return x + y
}

//function expression
//Não é carregada antes como function declaration
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

//named function expression
//a única vantagem do nome é que aparece o nome da função. É uma forma pouco usada
//vantagem quando for debugar
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))