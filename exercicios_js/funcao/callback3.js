//calback
//código para ser executado no browser
//e == evento
//Pode ter acesso ao evento e.target etc

document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu')
}
