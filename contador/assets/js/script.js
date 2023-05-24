const qS = (el) => document.querySelector(el);
let count = 0;
const display = qS(".contador-display");
const contadorMenos = qS(".contador-qtmenos");
const contadorZera = qS(".contador-qtzera");
const contadorMais = qS(".contador-qtmais");



contadorMenos.addEventListener("click",()=>{
    count -= 1;
    corCounter();
    return display.innerHTML = count;
});
contadorZera.addEventListener("click",()=>{
    count = 0;
    corCounter();
    return display.innerHTML = count;
});
contadorMais.addEventListener("click",()=> {
    count += 1;
    corCounter();
    return display.innerHTML = count;
});

function corCounter() {
    if(count == 0) {
        display.style.color = "#222";
    }
    if(count > 0) {
        display.style.color = "#0f4";
    }
    else if(count < 0) {
        display.style.color = "#f40";
    }
};