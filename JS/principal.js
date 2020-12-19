var rodada = "B";
var obj = [];
var cor = null;
var x = true;
var fezMovimento = false;
var reiBrancoDireitaMovimentou = false, reiPretoDireitaMovimentou = false;
var reiBrancoEsquerdaMovimentou = false, reiPretoEsquerdaMovimentou = false;
var Ta1 = false, Ta8 = false, Th1 = false, Th8 = false;
Direita = false;

function seleciona(letra, numero) {
    var id = letra + numero;

    //sistema de rodada
    if (x == true) { cor = temAlgo(id).charAt(1); }

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
    if (x == true) {
        x = false;
        if (obj.length < 1) {
            x = true;
        }
    } else {
        fazJogada(obj);
        let elements1 = document.getElementsByClassName('amarelo');
        let elements2 = document.getElementsByClassName('vermelho');
        while (elements1.length > 0) {
            elements1[0].classList.remove('amarelo');
        }
        while (elements2.length > 0) {
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
        
        //regras para o hook
        if (peca == "RB" && reiBrancoDireitaMovimentou == false && Th1 == false 
        && temAlgo("g1") == false && temAlgo("f1") == false) {
            obj[1].push("g1");
            document.getElementById("g1").classList.add('amarelo');
        } 
        if (peca == "RB" && reiBrancoEsquerdaMovimentou == false 
        && temAlgo("b1") == false && temAlgo("c1") == false && temAlgo("d1") == false) {
            obj[1].push("c1");
            document.getElementById("c1").classList.add('amarelo');
        }
        if (peca == "RP" && reiPretoDireitaMovimentou == false && Th8 == false 
        && temAlgo("g8") == false && temAlgo("f8") == false) {
            obj[1].push("g8");
            document.getElementById("g8").classList.add('amarelo');
        }
        if (peca == "RP" && reiPretoEsquerdaMovimentou == false && Ta8 == false
        && temAlgo("b8") == false && temAlgo("c8") == false && temAlgo("d8") == false) {
            obj[1].push("c8");
            document.getElementById("c8").classList.add('amarelo');
        }
       
        return obj;
    } else {
        return null;
    }
}

var id;
var movimentacao;
var peca;
var ondeVai;

//move a peça
function fazJogada(obj) {
    id = obj[0][0];
    movimentacao = obj[0][1];
    peca = obj[0][2];
    ondeVai = obj[1];
    
    for (let i = 0; i < movimentacao.length; i++) {
        if (ondeVai == movimentacao[i] && peca.charAt(0) != "R") {
            console.log('para ' + ondeVai);
            console.log("");
            document.getElementById(ondeVai).classList.remove(temAlgo(ondeVai));
            document.getElementById(ondeVai).classList.add(peca);
            document.getElementById(id).classList.remove(peca);
            if (peca == "TB" && id == "h1") {Th1 = true; reiBrancoDireitaMovimentou = true;}
            if (peca == "TB" && id == "a1") {Ta1 = true; reiBrancoEsquerdaMovimentou= true;}
            if (peca == "TP" && id == "h8") {Th8 = true; reiPretoDireitaMovimentou = true;}
            if (peca == "TP" && id == "a8") {Ta8 = true; reiPretoEsquerdaMovimentou = true;}
            fezMovimento = true;
            
        } else if (peca.charAt(0) == "R"  && ondeVai == movimentacao[i]) {   
            hook();           
        }
        
        //promoção do peão branco
        if (peca == "PB" && ondeVai.charAt(1) == "8") {
            document.getElementById("promocaoBranco").classList.remove("visibility");
            document.getElementById("tabuleiro").classList.add("pointer");
        } 
        
        //promoção do peão preto
        if (peca == "PP" && ondeVai.charAt(1) == "1") {
            document.getElementById("promocaoPreto").classList.remove("visibility");
            document.getElementById("tabuleiro").classList.add("pointer");
        }
    }
    //troca rodada
    if (fezMovimento == true) {
        rodada == "B" ? rodada = "P" : rodada = "B";
        console.log("rodada = " + rodada);
        fezMovimento = false;
    }
    //verifica se há um ganhador
    if (temRei() == "RB") {
        document.getElementById("vencedor").classList.remove("visibility");
        document.getElementById("vencedorPreto").classList.remove("visibility");
    } 
    if (temRei() == "RP") {
        document.getElementById("vencedor").classList.remove("visibility");
        document.getElementById("vencedorBranco").classList.remove("visibility");
    }
    obj.pop(0);
    obj.pop(1);
}

//regra para o hook
function hook() {
    if (peca.charAt(1) == "B") {
        if (ondeVai == "g1" && Th1 == false && reiBrancoDireitaMovimentou == false) {
            Direita = true;
            document.getElementById("h1").classList.remove("TB");
            document.getElementById("f1").classList.add("TB");
            reiBrancoDireitaMovimentou = true;
            Th1 = true;
        } else if (ondeVai == "c1" && Ta1 == false && reiBrancoEsquerdaMovimentou == false) {
            document.getElementById("a1").classList.remove("TB");
            document.getElementById("d1").classList.add("TB");
            reiBrancoEsquerdaMovimentou = true;
            Ta1 = true;
        }
        reiBrancoDireitaMovimentou = true;
        reiBrancoEsquerdaMovimentou = true;
    } else if (peca.charAt(1) == "P") {
        if (ondeVai == "g8" && Th8 == false && reiPretoDireitaMovimentou == false) {
            document.getElementById("h8").classList.remove("TP");
            document.getElementById("f8").classList.add("TP");
            reiPretoDireitaMovimentou = true;
            Th8 = true;
        } else if (ondeVai == "c8" && Ta8 == false && reiPretoEsquerdaMovimentou == false) {
            document.getElementById("a8").classList.remove("TP");
            document.getElementById("d8").classList.add("TP");
            reiPretoEsquerdaMovimentou = true;
            Ta8 = true;
        }
        reiPretoDireitaMovimentou = true;
        reiPretoEsquerdaMovimentou = true;
    }
    if (ondeVai != id) {
        document.getElementById(ondeVai).classList.remove(temAlgo(ondeVai));
        document.getElementById(ondeVai).classList.add(peca);
        document.getElementById(id).classList.remove(peca);
        fezMovimento = true;
    }
}

function promocao(peca) {
    document.getElementById(ondeVai).classList.remove(temAlgo(ondeVai));
    document.getElementById(ondeVai).classList.add(peca);
    document.getElementById("promocaoBranco").classList.add("visibility");
    document.getElementById("promocaoPreto").classList.add("visibility");
    document.getElementById("tabuleiro").classList.remove("pointer");
}

function reiniciar() {
   window.location.reload();
}

//mostra de quem é a rodada no console
rodada == "B" ? console.log("rodada = Branco") : console.log("rodada = Preto");