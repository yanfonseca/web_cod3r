//Arrei é um objeto
//só que usa um index e não as chaves valores
//É um objeto especial
//Dinâmico como no python

console.log(typeof Array, typeof new Array, typeof [])
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //Não retorna erro e sim undefined. 

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)

console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

console.log(aprovados)
aprovados.sort()

console.log(aprovados)

delete aprovados[1] // da mesma forma, mas a posição continua existindo, só fica undefined

console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //(índice, elemento)adiciona elementos em um índice, remove e a diciona elementos
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) //A partir do índice 1 apaga 2 elementos
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') //A partir do índice 1 apaga 2 elementos e adiciona 2 elementos também
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') //A partir do índice 1 adiciona 2 elementos também e não apaga nenhum
console.log(aprovados)

