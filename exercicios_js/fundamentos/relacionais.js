console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 1)
console.log('04)', '3' !== 1)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

//classe Date
//criar objeto com refências de memórias diferentes
const d1 = new Date(0) // 0 1 janeiro de 1970 - marco zero
const d2 = new Date(0)
console.log(d1, d2)
console.log('09)', d1 == d2) //== tanto faz nesse caso, por que está fazendo referência de memória
console.log('10)', d1 === d2) //=== tanto faz nesse caso, por que está fazendo referência de memória
console.log(d1.getTime(), d2.getTime())
console.log('11', d1.getTime() === d2.getTime())

console.log('12', undefined == null)
console.log('13', undefined === null)