var pecasAbreviacao = ["TB", "CB", "BB", "DB", "RB", "PB", "TP", "CP", "BP", "DP", "RP", "PP"];
var pecasAbreviacaoB = ["TB", "CB", "BB", "DB", "RB", "PB"];
var pecasAbreviacaoP = ["TP", "CP", "BP", "DP", "RP", "PP"];

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
function podeAtacar(idItem, peca, arr, id, i, iMax) {
    if (peca.charAt(1) == "B") {
        if (temAlgoP(id) != false && idItem != temAlgo(id)) {
            arr.push(id);
            document.getElementById(id).classList.add('amarelo');
            i = iMax+1
        } else if (temAlgoB(id) != false && idItem != temAlgo(id)) {
            i = iMax;
        } else {
            arr.push(id);
            document.getElementById(id).classList.add('amarelo');
        }          
    } else {
        if (temAlgoB(id) != false && idItem != temAlgo(id)) {
            arr.push(id);
            document.getElementById(id).classList.add('amarelo');
            i = iMax+1;
        } else if (temAlgoP(id) != false && idItem != temAlgo(id)) {
            i = iMax;
        } else {
            arr.push(id);
            document.getElementById(id).classList.add('amarelo');
        }          
    }
    return i;
}