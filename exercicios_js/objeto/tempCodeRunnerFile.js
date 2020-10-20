const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 'texto',
    e: { a: 2, b: 'texto' },
    soma() {
        return a + b + c
    }
}
//convertendo para json
console.log(JSON.stringify(obj)) // formato textual, apaga as funções

// console.log(JSON.parte("{a:1, b:2, c:2}")) //erro
// console.log(JSON.parse("{'a':1, 'b':2, 'c':3}")) //erro

console.log(JSON.parse('{"a":1, "b":2, "c":3}')) // válido