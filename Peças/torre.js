function torre(idItem, peca) {
    console.log("torre " + idItem);

    var letra = idItem.charAt(0);
    var numero = parseInt(idItem.charAt(1));
    var arr = [];

    for (let i = numero+1; i <= 8; i++) {   
        let id = letra + i;
        id = id.toString();
        let iMax = 8;
        i = podeAtacar(idItem, peca, arr, id, i, iMax);

    }
    for (let i = arrLetras.indexOf(letra)+1; i < 8; i++) {     
        let id = arrLetras[i] + numero;
        id = id.toString();
        let iMax = 8;
        i = podeAtacar(idItem, peca, arr, id, i, iMax); 
    }
    for (let i = numero; i > 1; i--) {
        let id = letra + (i - 1);
        id = id.toString();
        let iMax = -1;
        i = podeAtacar(idItem, peca, arr, id, i, iMax); 
    }    
    for (let i = arrLetras.indexOf(letra); i >= 1; i--) {     
        let id = arrLetras[i - 1] + numero;
        id = id.toString();
        let iMax = -1;
        i = podeAtacar(idItem, peca, arr, id, i, iMax); 
    }

    return arr;
}