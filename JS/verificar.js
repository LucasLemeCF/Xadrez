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
function podeAtacar(idItem, peca, arr, id) {
    if (peca.charAt(1) == "B") {
        if (temAlgoP(id) != false && idItem != temAlgo(id)) {
            arr.push(id);
            document.getElementById(id).classList.add('amarelo');
            return true;
        } else if (temAlgoB(id) != false && idItem != temAlgo(id)) {
            return false;
        }      
    } else {
        if (temAlgoB(id) != false && idItem != temAlgo(id)) {
            arr.push(id);
            document.getElementById(id).classList.add('amarelo');
            return true;
        } else if (temAlgoP(id) != false && idItem != temAlgo(id)) {
            return false;
        }       
    }
}