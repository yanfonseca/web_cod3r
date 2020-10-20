function Pessoa() {
    this.idade = 0
    const self = this //'const' - dessa forma o self não vai se alterar nunca. 'Drible' no this que é alterado segundo o contexto.
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa

