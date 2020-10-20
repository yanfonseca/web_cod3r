const moduloA = require('../../moduloA.js') //acesso relativo
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC') //procura o index
console.log(c.ola2)

const http = require('http')

http.createServer((req, resp) => {
    resp.write('bom dia')
    resp.end()
}).listen(8080)