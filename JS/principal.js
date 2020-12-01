import { torreBranco } from '../Peças/torreBranco.js';
import { desativa, mostraJogadas, trocaRodada} from './jogada.js'

var rodada = "Branco";

export var arrLetras = ["a", "b", "c", "d", "e", "f", "g", "h"];
var numeros = [1, 2, 3, 4, 5, 6, 7, 8];

var branco = "Branco";
var preto = "Preto";

document.querySelectorAll('.quadrado').forEach(item => {
    item.addEventListener('click', event => {
        
        desativa(item);
        principal(item);
        
    })
})

function principal(item) {
    if (!$(item).hasClass("nd")) {

        if (rodada == "Branco") {
            
        } else {

        }
        
        mostraJogadas(item);
        var itemAnterior = item;

        console.log("Rodada: " + rodada);

        rodada = trocaRodada(rodada);
    }
}