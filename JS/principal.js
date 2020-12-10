var rodada = "B";
var obj = [];
var cor = null;
var x = true;

function seleciona(letra, numero) {
    var id = letra + numero;
    
    //sistema de rodada
    if(x == true) { cor = temAlgo(id).charAt(1); }

    //mostra as jogadas possiveis
    if (rodada == cor) {
        if (obj.length < 1) {
            
            obj.push(mostraJogadas(id));
            if (obj[0] == null) {
                obj.pop(0);
            }
        } else {
            obj.push(id);
        }
    }
        
    //caso a peça seja selecionada, realiza o movimento
    if(x == true) {
        x = false;
        if (obj.length < 1) {
            x = true;
        }
    } else {  
        fazJogada(obj);
        let elements1 = document.getElementsByClassName('amarelo');
        let elements2 = document.getElementsByClassName('vermelho');
        while(elements1.length > 0){
            elements1[0].classList.remove('amarelo');
        }
        while(elements2.length > 0){
            elements2[0].classList.remove('vermelho');
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
        } else if (peca.charAt(0) == "P") {
            var arr = peao(id, peca); 
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
            rodada == "B" ? rodada = "P" : rodada = "B";
            console.log("rodada = " + rodada);
        }       
    }
    obj.pop(0);
    obj.pop(1);
}

//mostra de quem é a rodada no console
if (rodada == "B") {
    console.log("rodada = Branco");
} else {
    console.log("rodada = Preto");
}