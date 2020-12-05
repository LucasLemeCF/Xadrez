var rodada = "Branco";

var obj = [];
var x = true;


function seleciona(letra, numero) {
    var id = letra + numero;
    
    if (obj.length < 1) {
        obj.push(mostraJogadas(id));
        if (obj[0] == null) {
            obj.pop(0);
        }
    } else {
        obj.push(id);
        console.log();
    }
    
    if(x == true) {
        x = false;
        if (obj.length < 1) {
            x = true;
        }
    } else {
        fazJogada(obj);
        let elements = document.getElementsByClassName('amarelo');
        while(elements.length > 0){
            elements[0].classList.remove('amarelo');
        }
        x = true;
    }
}

//mostra as jogadas possiveis
function mostraJogadas(id) {
    if (document.getElementById(id).classList.contains(temAlgo(id))) {
        var peca = temAlgo(id);
        if (peca.charAt(0) == "T") {
            var arr = torre(id, peca); 
        } else if (peca.charAt(0) == "C") {
            var arr = cavalo(id, peca); 
        } else if (peca.charAt(0) == "B") {
            var arr = bispo(id, peca); 
        } else if (peca.charAt(0) == "D") {
            var arr = dama(id, peca); 
        } else if (peca.charAt(0) == "R") {
            var arr = rei(id, peca); 
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