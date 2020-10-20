const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // Vai chamar a função(callback) para cada elemento
fabricantes.forEach(function (fabricante) {
    console.log(fabricante)
})

//parece o map do python
fabricantes.forEach(fabricante => console.log(fabricante))