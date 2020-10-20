// Cadeia de protótipos (prototype chain)

//testes com object, mas é só para testar ok? Não faça isso! Impacta em toda estrutura.
Object.prototype.attr0 = '0'
Object.prototype.attrA = 'AZ'

const avo = { attr1: 'A' }

const pai = { __proto__: avo, attr2: 'B', attr3: '3' }

const filho = { __proto__: pai, attr3: 'C' } //attr3 mais recente tem preferência na herança

console.log(filho.attrZ) //undefined
console.log(filho.attrA)
console.log(filho.attr0)
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`//super para acessar metodo recebido por herança
    }
}
//funcao que estabelece relacao de prototipo, equivale a usar o __proto__:carro
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())