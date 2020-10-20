
// npm i lodash
// Não consegui instalar na pasta, não funcionou no windows

// instalação global
// npm i -g nodemon

// roda o arquivo em tempo real e é resetado cada vez que o arquivo é atualizado
// nodemon usandoModulosTerceiros.js 

const _ = require('lodash')

setInterval(() => console.log(_.random(5, 10)), 2000)