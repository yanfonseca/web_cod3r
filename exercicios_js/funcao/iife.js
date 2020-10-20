// funcao autoinvocada
// para fugir do escopo global
// escopo global do que está na função no momento da execução

//IIFE -> Immediately Invoked Function Expression

(function () {
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente');

    function teste() {
        console.log('Será executado na hora!');
        console.log('Foge do escopo mais abrangente');
    }
    teste()
})()
