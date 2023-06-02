const buttonStart = document.querySelector(".start");
const pokeInfo = document.querySelector(".pokeInfo");
const pokeImg = document.querySelector(".pokeImg img");
let pokeName = document.querySelector(".pokeImg h1");
let region = document.querySelector(".regiao");
let type = document.querySelector(".tipo");
let pokemonList = [
    {name:"squirtle", region: "kanto", type: "água", description: "Squirtle é um pokemon destemido e amavel, cuidado com seu jato de água!", img: "../images/squirtle.png"},
]
let pokemon = 0;

buttonStart.addEventListener("click",start);

function start(){
    renderInfo();
}
function renderInfo(){
    region.innerHTML = pokemonList[pokemon].region;

    type.innerHTML = pokemonList[pokemon].type;

    pokeName.innerHTML = pokemonList[pokemon].name;

}