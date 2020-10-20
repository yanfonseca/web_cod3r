const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//desviando fluxo
//break age em blocos de repetição e switch
console.log('x')
for (let x in nums) {
    if (x == 5) break
    console.log(`x_${x} = ${nums[x]}`)
}
//continue manda para a próxima 
console.log('y')
for (let y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`x_${y} = ${nums[y]}`)
}
//if pode ficar na ser na mesma linha


//rotulo
//dessa forma o break nao age na repetição interna, mas na verdade vai para externo

externo: //NUNCA USE ESSA ESTRUTURA - Similar ao goto do vba
for (let a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}

console.log('fim')