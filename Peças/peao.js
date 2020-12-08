function peao(idItem, peca) {
    console.log("peao " + idItem);

    let letra = idItem.charAt(0);
    let numero = parseInt(idItem.charAt(1));
    let arr = [];
    let id = null;
    

    for (let i = 1; i <= 2; i++) {
        if (peca.charAt(1) == "B") {
            id = (letra + (numero + i));
            if (numero != 2) {
                id = (letra + (numero + 1));
            } 
            if (podeAtacar(idItem, peca, letra + (numero + 1)) == true && i == 2) {
                id = (letra + (numero + 1));
            }       
        } else if (peca.charAt(1) == "P") {
            id = (letra + (numero - i));
            if (numero != 7) {
                id = (letra + (numero - 1));
            }     
            if (podeAtacar(idItem, peca, letra + (numero - 1)) == true && i == 2) {
                id = (letra + (numero - 1));
            }       
        } 
        for (let j = 0; j < 64; j++) {
            if (id == tabuleiro[j]) {
                if (podeAtacar(idItem, peca, id) == null) {
                    arr.push(id);
                    document.getElementById(id).classList.add('amarelo');
                }
            } 
        }    
        id = null; 
        for (let index = -1; index <= 1 ; index++) {
            if (index == 0) {index = 1}
            let indexLetra = arrLetras.indexOf(letra) + (index);
            if (peca.charAt(1) == "B") {
                id = (arrLetras[indexLetra] + (numero + 1));
            } else if (peca.charAt(1) == "P") {
                id = (arrLetras[indexLetra] + (numero - 1));
            }
            
            for (let j = 0; j < 64; j++) {
                if (id == tabuleiro[j]) {
                    if (podeAtacar(idItem, peca, id) == true) {
                        arr.push(id);
                        document.getElementById(id).classList.add('vermelho');
                    }
                } 
            }
        }
    }

    

    return arr;
}