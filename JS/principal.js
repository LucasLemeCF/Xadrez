var rodada = "B", jogador = "B", c = 0, vencedor = "", jx = 0, jo = 0, e = 0, iter = 0;

var letras = ["a", "b", "c", "d", "e", "f", "g", "h"];
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8];

var branco = "B";
var preto= "P";

document.querySelectorAll('.quadrado').forEach(item => {
    item.addEventListener('click', event => {

        console.log("Xadrex");
        c++;
        
        mostraJogadas(item.id, item.getAttribute());

        console.log("jogador " + rodada);
        console.log(tabuleiro);

        if (venceu(tabuleiro, rodada)) {
            funcVencedor();
            return;
        } else if (c > 8) {
            empate();
            return;
        } else {
            trocaRodada();
        }

    })
})