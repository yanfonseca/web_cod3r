## Minhas anotações e exercícios do Curso WEB - Cod3r

## JavaScript

### Null vs Undefined

    Usando let a cópia por valor é feita
    - const a = {name: 'teste'}
    - b = a
    - b.name = 'Opa'
    As constantes a e b apontam para o mesmo local.
    
    - let a = 10
    - let b = a
    Dessa forma, a e b estão armazenados em diferetes locais da memória.

### Fuja do escopo global

    O let age diretamento no escopo, por isso, se usado let dentro de um escopo, essa variável não será acessada fora dele, portanto, pode usar o mesmo nome.

    var não define escopo

    O var sofre o hoisting 
    
    Não gera erro porque acontece o hoisting. O programa sabe que a variável existe, mas ainda não sabe o valor.

### Função
    Função é parâmetro
    Pode ser retornada
    Função dentro de função
    Pode ser armazenada em uma variável
    Atenção: this pode variar. Depende de como a função é chamada. Para uma função arrow o this nunca varia.

### Navegador
    Escopo global do browser é o window
    window === this
    const e let a não fica no escopo global do window
    usando funcao arrow para const também nao será acessada em window
    const f2 = () => console.log(this ===window)
    let pessoa = {nome:'Ana', falar: function(){return `sou $this.nome`}}

### Repositório Cod3r - https://github.com/cod3rcursos/web-moderno


let ola = function teste() { //funcao anônima
    return 'Olá'
}