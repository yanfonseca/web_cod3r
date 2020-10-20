//python é identado, js não é.
//para o bloco if que tiver apenas UMA estrutura de código as chaves são opcionais. 
function teste(num) {
    if (num > 7)
        console.log(num); console.log("teste")
    console.log('Final')
}

teste(6)
teste(8)

//o if não analisa nada
//após estrutura if não se usa ';'
//não ';' usar com as estruturas de controle
function teste2(num) {
    if (num > 7); {
        console.log(num)
    }
}


teste2(6)
teste2(8)