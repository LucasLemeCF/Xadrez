//mostra as jogadas possiveis
function mostraJogadas(id) {
    if (document.getElementById(id).classList.contains(temAlgo(id))) {
        var peca = temAlgo(id);
        if (peca.charAt(0) == "T") {
            var arr = torre(id, peca); 
        }      
        var obj = [id, arr, peca];
        return obj;  
    } else {
        return null;
    }
}

//move a peça
function fazJogada(obj) {
    let id = obj[0][0];
    let amarelo = obj[0][1];
    let peca = obj[0][2];
    let ondeVai = obj[1];
    console.log();
    for (let i = 0; i < amarelo.length; i++) {
        if (ondeVai ==  amarelo[i]) {
            console.log('para ' + ondeVai);
            console.log("");
            document.getElementById(ondeVai).classList.remove(temAlgo(ondeVai));
            document.getElementById(ondeVai).classList.add(peca);
            document.getElementById(id).classList.remove(peca);
        }       
    }
    
    obj.pop(0);
    obj.pop(1);
}