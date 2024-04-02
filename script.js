let conta = 0
let pessoas = 0

const contaInput=document.querySelector("#conta")
contaInput.addEventListener ("input", receberValorConta)

function receberValorConta (evento) {
    conta = Number(evento.terger.value)
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento){
    if(evento.terger.value === "0"){
        const paragrafoErro = document.querySelector(".pessoas #erro")
        paragrafoErro.style.display = "block"
    }
}