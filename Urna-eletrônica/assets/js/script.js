const qS = (el) => document.querySelector(el);
//variáveis de controle de interface
let seuVotoPara = qS(".d-1--1 span");
let spaceCargo = qS(".d-1--2 span");
let description = qS(".d-1--4");
let aviso = qS(".d-2");
let lateral = qS(".d-1--right");
let numeros = qS(".d-1--3");

//variáveis de ambiente
let etapaAtual = 0;
let numero = '';
let votoBranco = false;


function startEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = "";
    numero = "";
    votoBranco = false;

    for(let i = 0;i<etapa.numeros;i++){
        if(i === 0){
            numeroHtml += '<div class="numeros pisca"></div>'
        }else{
            numeroHtml += '<div class="numeros"></div>'
        }
        
    }
    seuVotoPara.style.display = "none";
    spaceCargo.innerHTML = etapa.titulo;
    description.innerHTML = "";
    aviso.style.display = "none";
    lateral.innerHTML = "";
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface(){
    //números dos vereadores 
    //Andin: 38111
    //robin: 77222
    //Este foi o jeito que eu pensei em fazer, mas temos que pensar em códigos mais orgânicose que sirvam para o futuro.
    /*
    if(etapaAtual === 0){
        if(numero === "38111"){
            seuVotoPara.style.display = "flex";
            description.innerHTML = `Nome: ${etapas[etapaAtual].candidatos[0].name} <br/> Partido: ${etapas[etapaAtual].candidatos[0].partido} <br/>`
            aviso.style.display = "flex";
            lateral.innerHTML = "<div class='d-1--imagem'><img src='assets/img/38111.jpg'/></div>"

        }else if(numero === "77222"){
            seuVotoPara.style.display = "flex";
            description.innerHTML = `Nome: ${etapas[etapaAtual].candidatos[1].name} <br/> Partido: ${etapas[etapaAtual].candidatos[1].partido} <br/>`
            aviso.style.display = "flex";
            lateral.innerHTML = "<div class='d-1--imagem'><img src='assets/img/77222.jpg'/>Vereador</div>"
        }else{
            aviso.innerHTML = "Voto NULO? se sim aperte CONFIRMAR"
            aviso.style.display = "flex";
        }
    }*/
    //segue o código do professor
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero) {
            return true;
        }else{
            return false;
        }
    });
    if(candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = "block";
        description.innerHTML = `Nome: ${candidato.name} <br/> Partido: ${candidato.partido} <br/>`;
        aviso.style.display = "block";

        let fotosHtml = "";
        for(let i in candidato.fotos){
            if(candidato.fotos[i].small){
                fotosHtml += `<div class='d-1--imagem small'><img src='assets/img/${candidato.fotos[i].url}'/>${candidato.fotos[i].legenda}</div>`
            }else{
                fotosHtml += `<div class='d-1--imagem'><img src='assets/img/${candidato.fotos[i].url}'/>${candidato.fotos[i].legenda}</div>`
            }
            
        }
        lateral.innerHTML = fotosHtml;
    }else {
        seuVotoPara.style.display = "block";
        aviso.style.display = "block";
        description.innerHTML = `<div class="aviso--grande">VOTO NULO</div>`;
    }
    
}

function clicou(n) {
    let elNumero = qS(".numeros.pisca");
    if(elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove("pisca");
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add("pisca");
        }
        else{
            atualizaInterface();
        }
        
    }
}
function branco(){
    if(numero === ""){
        votoBranco = true;
        seuVotoPara.style.display = "block";
        aviso.style.display = "block";
        numeros.innerHTML = "";
        description.innerHTML = `<div class="aviso--grande">VOTO EM BRANCO</div>`;
    }else {
        alert("Para votar em branco esvazie a caixa de números!");
    }
}
function corrige(){
    startEtapa();
}
function confirma(){
    let votoConfirmado = false;
    let etapa = etapas[etapaAtual];
    if(votoBranco === true){
        votoConfirmado = true;
        alert("Votando em Branco...");
    }else if(numero.length === etapa.numeros){
        votoConfirmado = true;
        alert("Confirmando")
    }
    if(votoConfirmado){
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
            startEtapa();
        }else{
            document.querySelector(".display").innerHTML = "<h1 class='aviso--gigante pisca'>FIM</h1>"
            etapaAtual = 0;
        }
    }
}
startEtapa();