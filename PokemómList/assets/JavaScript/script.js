const buttonStart = document.querySelector(".start");
const buttonLeft = document.querySelector(".control-horizontal-left");
const buttonRight = document.querySelector(".control-horizontal-right");
const pokeInfo = document.querySelector(".pokeInfo");
const pokeImgScreen = document.querySelector(".pokeImg");
const screen = document.querySelector(".screen");
let pokeImg = document.querySelector(".pokeImg img");
let pokeName = document.querySelector(".pokeImg h1");
let region = document.querySelector(".regiao");
let type = document.querySelector(".tipo");
let description = document.querySelector(".description");

let pokemonList = [
    {name:"squirtle", region: "kanto", type: "água", description: "Squirtle é um pokemon destemido e amavel, cuidado com seu jato de água!", img: "../images/squirtle.jpg"},

    {name:"pikachu", region: "kanto", type: "Elétrico", description: "pikachu é um pokemon tipo elétrico muito audaz, cuidado com seu choque do trovão!", img: "../images/pikachu.jpg"},

    {name:"Charmander", region: "kanto", type: "Fogo", description: "Charmander é um pokemon tipo fogo meio tímido, cuidado com seu lança chamas!", img: "../images/charmander.jpg"},

    {name:"Bulbasauro", region: "kanto", type: "Grama", description: "Bulbasauro é um pokemon tipo grama super desconfiado, porém adorável! cuidado com seu chicote!", img: "../images/bulba.jpg"},

    {name:"snorlax", region: "kanto", type: "normal", description: "snorlax é um enorme pokemon tipo normal super preguiçoso, cuidado para não te esmagar ou comer o seu lanche.", img: "../images/snorlax.jpg"}

]
let pokemon = 0;

buttonStart.addEventListener("click",start);
buttonLeft.addEventListener("click",leftList);
buttonRight.addEventListener("click",rightList);

function start(){
    if(pokeImgScreen.style.display !== "block"){
        insertInfo();
        renderInfo();
    }else{
        pokeImgScreen.style.display = "none";
        pokeInfo.style.display = "none";
        screen.style.backgroundColor = "#222";
    }  
}

function insertInfo(){
    screen.style.backgroundColor = "#bbb"
    region.innerHTML = pokemonList[pokemon].region;
    type.innerHTML = pokemonList[pokemon].type;
    if((pokemonList[pokemon].name).length <= 7){
        pokeName.innerHTML = pokemonList[pokemon].name;
    } else{
        pokeName.style.fontSize = "15px";
        pokeName.innerHTML = pokemonList[pokemon].name;
    }
    pokeImg.src = pokemonList[pokemon].img;
    description.innerHTML = pokemonList[pokemon].description
}
function renderInfo(){
    pokeImgScreen.style.display = "block";
    pokeInfo.style.display = "block";
}

function leftList(){
    if(pokemon > 0){
        pokemon--;
        insertInfo();
        renderInfo();
    }
}

function rightList(){
    if(pokemon < (pokemonList.length)) {
        pokemon++;
        insertInfo();
        renderInfo();
    }else{
        pokemon = 0;
        insertInfo();
        renderInfo();
    }
}