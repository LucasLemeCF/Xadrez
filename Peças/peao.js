function peao(idItem, peca) {
    console.log("peao " + idItem);

    let letra = idItem.charAt(0);
    let numero = parseInt(idItem.charAt(1));
    let arr = [];
    let id = null;
    

    for (let i = 1; i <= 2; i++) {
        if (peca.charAt(1) == "B") {
            if (numero == 2) {
                id = (letra + (numero + i));
            } else {
                id = (letra + (numero + 1));
            }    
        } else if (peca.charAt(1) == "P") {
            if (numero == 7) {
                id = (letra + (numero - i));
            } else {
                id = (letra + (numero - 1));
            }     
        } 
        if (podeAtacar(idItem, peca, id) == null) {
            arr.push(id);
            document.getElementById(id).classList.add('amarelo');
        }
    }

   for (let index = -1; index <= 1 ; index++) {
        if (index == 0) {index = 1}
        let indexLetra = arrLetras.indexOf(letra) + (index);
        if (peca.charAt(1) == "B") {
            id = (arrLetras[indexLetra] + (numero + 1));
        } else if (peca.charAt(1) == "P") {
            id = (arrLetras[indexLetra] + (numero - 1));
        }
        if (podeAtacar(idItem, peca, id) == true) {
            arr.push(id);
            document.getElementById(id).classList.add('vermelho');
        }
    }
    
    return arr;
}