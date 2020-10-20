const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //Massa quebrou
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

//remove
pilotos.splice(3, 1) //Massa quebrou
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) //Faz o slice parecido com o do python a diferença é que precisa usar a função
console.log(algunsPilotos2)

