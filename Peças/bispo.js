function bispo(idItem, peca) {
    console.log("bispo " + idItem);

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
                    if (podeAtacar(idItem, peca, arr, id) == true) {
                        i = 9;
                        j = 9;
                    } else if (podeAtacar(idItem, peca, arr, id) == false) {
                        i = 8;
                        j = 8;
                    } else {
                        arr.push(id);
                        document.getElementById(id).classList.add('amarelo');
                    }
                } 
            } 
            j++;                
        }
    }

    coordenada(1, 1);
    coordenada(1, -1);
    coordenada(-1, -1);
    coordenada(-1, 1);

    return arr;
}