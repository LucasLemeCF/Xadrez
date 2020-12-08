function dama(idItem, peca) {
    console.log("dama " + idItem);

    let letra = idItem.charAt(0);
    let numero = parseInt(idItem.charAt(1));
    let arr = [];

    function coordenada(sinal1, sinal2) {
        j = 1;
        for (let i = 1; i <= 8; i++) {   
            let indexLetra = arrLetras.indexOf(letra) + (j * sinal1);   
            let id = (arrLetras[indexLetra] + (numero + (j * sinal2)).toString());
            for (let index = 0; index < 64; index++) {
                if (id == tabuleiro[index]) {
                    if (podeAtacar(idItem, peca, id) == true) {
                        arr.push(id);
                        document.getElementById(id).classList.add('vermelho');
                        i = 9;
                    } else if (podeAtacar(idItem, peca, id) == false) {
                        i = 8;
                    } else {
                        arr.push(id);
                        document.getElementById(id).classList.add('amarelo');
                    } 
                } 
            } 
            j++;                
        }
    }

    //movimento torre
    coordenada(1, 0);
    coordenada(-1, 0);
    coordenada(0, 1);
    coordenada(0, -1);

    //movimendo bispo
    coordenada(1, 1);
    coordenada(1, -1);
    coordenada(-1, -1);
    coordenada(-1, 1);

    return arr;
}