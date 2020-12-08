function cavalo(idItem, peca) {
    console.log("cavalo " + idItem);

    var letra = idItem.charAt(0);
    var numero = parseInt(idItem.charAt(1));
    var arr = [];
    let i = null;

    function coordenadaC(letraAcrescimo, numeroAcrescimo) {
        let indexLetra = arrLetras.indexOf(letra) + letraAcrescimo;   
        let id = (arrLetras[indexLetra] + (numero + numeroAcrescimo).toString());
        for (let index = 0; index < 64; index++) {
            if (id == tabuleiro[index]) {
                if (podeAtacar(idItem, peca, id) == true) {
                    arr.push(id);
                    document.getElementById(id).classList.add('vermelho');
                }   
                if (podeAtacar(idItem, peca, id) == null) {
                    arr.push(id);
                    document.getElementById(id).classList.add('amarelo');
                }       
            }
        }    
    }
    
    coordenadaC(1, 2);
    coordenadaC(2, 1);
    coordenadaC(2, -1);
    coordenadaC(1, -2);
    coordenadaC(-1, -2);
    coordenadaC(-2, -1);
    coordenadaC(-2, 1);
    coordenadaC(-1, 2);

    return arr;
}