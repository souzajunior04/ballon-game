var total = 0;

const { removeChild } = require("min-document");


function criarBalao(){
    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    var x = Math.floor(Math.random() * 600);
    var y = Math.floor(Math.random() * 400);

    balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);
}

//estourar

function estourar(objeto){
    document.body.removeChild(objeto);

    total++;
    var score = document.getElementById('total');
    score.innerHTML = "Baloes estourados: " + total;
}

//carregar

function carregarJogo(){
    setInterval(criarBalao, 1000);
}