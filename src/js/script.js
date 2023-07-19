var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
 Bruna.style = "display:none"
 Samantha.style = "display:grid"
 setaDireita.style = "display:none"
 setaEsquerda.style = "display:block"
}

function RolarParaEsquerda() {
 Bruna.style = "display:grid"
 Samantha.style = "display:none"
 setaDireita.style = "display:block"
 setaEsquerda.style = "display:none"
}
