
/*
código SlideShow Riuan
const qS = (el) => document.querySelector(el);
let slideArea = qS(".slideArea img");

let countImage = 0;
let images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
]

function atualizaSlide(){
    countImage++;
    if(countImage < 2) {
    return slideArea.src = `img/${images[countImage]}`
    } else {
        countImage = -1;
    } 
}
atualizaSlide();
setInterval(atualizaSlide,1000);
*/
const qS = (el) => document.querySelector(el);
let currentSlide = 0;
let totalSliders = document.querySelectorAll(".slider-item").length;
qS(".slideArea").style.width = `calc(100vw * ${totalSliders} )`;

qS(".slider--controls").style.height = `${qS(".slider").clientHeight}px`;

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSliders - 1;
    }
    updateMargin();
}
function goNext(){
    currentSlide++;
    if(currentSlide > (totalSliders - 1)){
        currentSlide = 0;
    }
    updateMargin();
}
function updateMargin(){
    let newMargin = (currentSlide * document.body.clientWidth);
    qS(".slideArea").style.marginLeft = `-${newMargin}px`;
}
qS(".slider--control").innerHTML = "<";
qS(".slider--controls .slider--control:last-child").innerHTML = ">";
//setInterval(goNext,6000);