const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(
        function () { console.log(i) }
    )
}

console.log(funcs)
funcs[2]()
funcs[8]() //Respeita o escopo, existe a memória do valor de i.