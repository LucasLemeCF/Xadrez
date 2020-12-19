const pecasAbreviacao = ["TB", "CB", "BB", "DB", "RB", "PB", "TP", "CP", "BP", "DP", "RP", "PP"];
const pecasAbreviacaoB = ["TB", "CB", "BB", "DB", "RB", "PB"];
const pecasAbreviacaoP = ["TP", "CP", "BP", "DP", "RP", "PP"];
const arrLetras = ["a", "b", "c", "d", "e", "f", "g", "h"];
const arrnumeros = [1, 2, 3, 4, 5, 6, 7, 8];

var tabuleiro = []
document.querySelectorAll('.quadrado').forEach(element => {
    tabuleiro.push(element.id);
});

//verifica se tem alguma peça
function temAlgo(id) {
    let x = false;
    pecasAbreviacao.forEach(element => {
        if(document.getElementById(id).classList.contains(element) == true) {x = element;}
    });  
    if (x == false) {
        return false;
    } else {
        return x;
    }
}

//verifica se tem alguma peça branca
function temAlgoB(id) {
    let x = false;
    pecasAbreviacaoB.forEach(element => {
        if(document.getElementById(id).classList.contains(element) == true) {x = element;}
    });  
    if (x == false) {
        return false;
    } else {
        return x;
    }
}


//verifica se tem alguma peça preta
function temAlgoP(id) {
    let x = false;
    pecasAbreviacaoP.forEach(element => {
        if(document.getElementById(id).classList.contains(element) == true) {x = element;}
    });  
    if (x == false) {
        return false;
    } else {
        return x;
    }
}

//verifica se pode atacar a peça
function podeAtacar(idItem, peca, id) {
    if (peca.charAt(1) == "B") {
        if (temAlgoP(id) != false && idItem != temAlgo(id)) {
            return true;
        } else if (temAlgoB(id) != false && idItem != temAlgo(id)) {
            return false;
        }      
    } else {
        if (temAlgoB(id) != false && idItem != temAlgo(id)) {
            return true;
        } else if (temAlgoP(id) != false && idItem != temAlgo(id)) {
            return false;
        }       
    }
}

//verifica se o rei esta no tabuleiro
function temRei() {
    let branco = 0;
    let preto = 0;

    document.querySelectorAll('.quadrado').forEach(element => {
        if (element.classList.contains("RB")) {
        } else branco++;
    });
    if (branco == 64) {
        let peca = "RB"
        return peca;
    }

    document.querySelectorAll('.quadrado').forEach(element => {
        if (element.classList.contains("RP")) {
        } else preto++;
    });
    if (preto == 64) {
        let peca = "RP"
        return peca;
    }
}