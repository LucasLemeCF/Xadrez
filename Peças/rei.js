function rei(idItem, peca) {
    console.log("rei " + idItem);

    let letra = idItem.charAt(0);
    let numero = parseInt(idItem.charAt(1));
    let arr = [];

    function coordenada(sinal1, sinal2) {
        j = 1;
        let indexLetra = arrLetras.indexOf(letra) + (j * sinal1);   
        let id = (arrLetras[indexLetra] + (numero + (j * sinal2)).toString());
        for (let index = 0; index < 64; index++) {
            if (id == tabuleiro[index]) {
                if (podeAtacar(idItem, peca, arr, id) == null) {
                    arr.push(id);
                    document.getElementById(id).classList.add('amarelo');
                } 
            } 
        } 
        j++;                
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