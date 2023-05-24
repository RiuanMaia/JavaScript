let log = new Log(document.querySelector(".log"));

let char = new Knight("Riuan");
let monster = new BigMonster();
//lembrar de usar uma factory para criação tanto de monstros
//como de personagens.
//se ele não fizer, fazer a escolha dos personagens.
const stage = new Stage(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    log
);
//estou feliz porque até aqui eu tinha o determinado conhecimento para fazer 
stage.start();


document.querySelector(".log li").style.marginBottom = "20px";
