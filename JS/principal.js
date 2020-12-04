var rodada = "Branco";

const arrLetras = ["a", "b", "c", "d", "e", "f", "g", "h"];
const arrnumeros = [1, 2, 3, 4, 5, 6, 7, 8];
var obj = [];
var x = true;


function seleciona(letra, numero) {
    var id = letra + numero;
    
    if (obj.length < 1) {
        obj.push(mostraJogadas(id));
        if (obj[0] == null) {
            obj.pop(0);
        }
    } else {
        obj.push(id);
    }
    
    if(x == true) {
        x = false;
        if (obj.length < 1) {
            x = true;
        }
    } else {
        fazJogada(obj);
        let elements = document.getElementsByClassName('amarelo');
        while(elements.length > 0){
            elements[0].classList.remove('amarelo');
        }
        x = true;
    }
}