import {arrLetras} from  '../JS/principal.js'

export function torreBranco(item) {
    console.log("torreBranco " + item.id);

    var letra = item.id.charAt(0);
    var numero = parseInt(item.id.charAt(1));

    for (let i = numero; i <= 8; i++) {
        var id = letra + (i + 1);
        id = id.toString();
        $('#' + id).addClass('amarelo');
    }
    for (let i = arrLetras.indexOf(letra); i <= 8; i++) {     
        var id = arrLetras[i + 1] + numero;
        id = id.toString();
        $('#' + id).addClass('amarelo');
    }
    for (let i = numero; i >= 1; i--) {
        var id = letra + (i - 1);
        id = id.toString();
        $('#' + id).addClass('amarelo');
    }
    for (let i = arrLetras.indexOf(letra); i >= 1; i--) {     
        var id = arrLetras[i - 1] + numero;
        id = id.toString();
        $('#' + id).addClass('amarelo');
    }
}
