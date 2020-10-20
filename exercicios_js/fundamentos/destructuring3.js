function rand({ min = 0, max = 1000 }) {
    if (min > max) [min, max] = [max, min] // Adicionei esse teste usando destructuring de array
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
//console.log(rand())) //erro

const obj2 = { max: 10, min: 50 }
console.log(rand(obj2))