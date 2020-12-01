export function trocaRodada(rodada) {
    if (rodada == "Branco") {
        var rodada = "Preto";  
        return rodada;
    } else {
        var rodada = "Branco";
        return rodada;
    }
}

export function desativa(item) {
    document.querySelectorAll('.quadrado').forEach(item => {
        item.classList.remove("amarelo");
    })
}

export function mostraJogadas(item) {
    if ($(item).hasClass("TB")) {
        torreBranco(item);
    } else if ($(item).hasClass("TP")) {
        console.log("torrePreto");
    } else if ($(item).hasClass("")) {
       
    } else if ($(item).hasClass("")) {

    } else if ($(item).hasClass("")) {

    } else if ($(item).hasClass("")) {

    } else if ($(item).hasClass("")) {

    } else if ($(item).hasClass("")) {

    } else if ($(item).hasClass("")) {

    } else if ($(item).hasClass("")) {
        
    } else if ($(item).hasClass("")) {

    } else if ($(item).hasClass("")) {

    } else if ($(item).hasClass("")) {

    } else if ($(item).hasClass("")) {

    } else if ($(item).hasClass("")) {

    } else if ($(item).hasClass("")) {

    } else if ($(item).hasClass("")) {

    } else if ($(item).hasClass("")) {

    } else if ($(item).hasClass("")) {

    } else if ($(item).hasClass("")) {

    }
}

import {torreBranco} from '../Peças/torreBranco.js'