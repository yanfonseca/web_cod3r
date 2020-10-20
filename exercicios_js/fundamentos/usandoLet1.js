/*O let age diretamento no escopo, por isso, 
se usado let dentro de um escopo, 
essa variável não será acessada fora dele, 
portanto, pode usar o mesmo nome.
*/
var numero = 1
var fora = 10
{
    let numero = 2
    console.log('dentro = ', numero)
    console.log('fora = ', fora) // se a variável não é achada, entao busca no escopo de fora.
}
console.log('dentro = ', numero)