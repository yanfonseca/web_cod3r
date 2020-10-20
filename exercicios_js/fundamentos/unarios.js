let num1 = 1
let num2 = 2

//antes ou depois não faz diferença, mas a precendencia existe
num1++ //menor prioridade
console.log(num1)
--num1 //maior prioridade
console.log(num1)

console.log(++num1 === num2--)
console.log(++num1 === --num2) // Estranho né?


