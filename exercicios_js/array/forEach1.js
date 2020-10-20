const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice, array) { //forEach recebe 3 parametros: nome, indice, array_completo
    console.log(`${indice + 1}) ${nome}`)
    // console.log(array)
}
)
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (aprovado, indice) => console.log(`${indice + 1}) ${aprovado}`)
aprovados.forEach(exibirAprovados)

