var texto = prompt('Insira uma palavra ou texto.');

function inverter(texto) {
    var i = texto.length;
    var novaString = '';
    while (i > 0) {
        novaString += texto.substring(i-1, i);
        i--;
    }
    return novaString;
}

alert('Palavra atual: ' + texto + '\nPalavra invertida: ' + inverter(texto));