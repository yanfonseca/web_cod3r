function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado - nao tem o this
    let velocidadeAtual = 0 // evite o uso do var

    // metodo publico - tem o this
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico - se não tiver o this retorna erro
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

    this.getVelocidadeMaxima = function () {
        return velocidadeMaxima
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())
console.log(uno.getVelocidadeMaxima())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())