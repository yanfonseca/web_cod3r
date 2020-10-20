{
    {
        {
            {
                {
                    let testando = 'testando'
                    console.log(testando)
                    var sera = 'Será??'
                    console.log(sera)
                }
            }
        }
    }
}

// console.log(testando) //mostra erro porque não está no escopo global
console.log(sera) //Acessa o escopo de sera

function teste() {
    var local = 'local'
    console.log(local)
}

teste()

//console.log(local) // Não acessa o escopo da funçao

