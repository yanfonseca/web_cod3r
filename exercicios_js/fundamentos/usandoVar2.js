var numero = 1
console.log('fora = ', numero)
const const_numero = 10
{
    var numero = 2 //var mesmo que declado em outro escopo poderá ser acessado do escopo global
    console.log('dentro = ', numero)
    const const_numero = 10000000000
    console.log('const_numero = ', const_numero)
}
console.log('dentro = ', numero)
console.log('const_numero = ', const_numero)
