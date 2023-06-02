const buttonStart = document.querySelector(".start");
const pokeInfo = document.querySelector(".pokeInfo");
const pokeImgScreen = document.querySelector(".pokeImg");
let pokeImg = document.querySelector(".pokeImg img");
let pokeName = document.querySelector(".pokeImg h1");
let region = document.querySelector(".regiao");
let type = document.querySelector(".tipo");
let description = document.querySelector(".description");
let pokemonList = [
    {name:"squirtle", region: "kanto", type: "água", description: "Squirtle é um pokemon destemido e amavel, cuidado com seu jato de água!", img: "../images/squirtle.jpg"},

    {name:"pikachu", region: "kanto", type: "Elétrico", description: "pikachu é um pokemon tipo elétrico muito audaz, cuidado com seu choque do trovão!", img: "../images/squirtle.jpg"}
]
let pokemon = 1;

buttonStart.addEventListener("click",start);

function start(){
    if(pokeImgScreen.style.display !== "block"){
        insertInfo();
        renderInfo();
    }else{
        pokeImgScreen.style.display = "none";
        pokeInfo.style.display = "none";
    }
    
}
function insertInfo(){
    region.innerHTML = pokemonList[pokemon].region;

    type.innerHTML = pokemonList[pokemon].type;

    pokeName.innerHTML = pokemonList[pokemon].name;

    pokeImg.src = pokemonList[pokemon].img;

    description.innerHTML = pokemonList[pokemon].description
}
function renderInfo(){
    pokeImgScreen.style.display = "block";
    pokeInfo.style.display = "block";
}