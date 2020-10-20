const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

console.log(funcs)
funcs[2]()
funcs[8]() //sempre vai mostrar 10 por causa da variavel de escopo
