const qS = (el) => document.querySelector(el);

const ponteiroS = qS(".p_s");
const ponteiroM = qS(".p_m");
const ponteiroH = qS(".p_h");

let digitalElement = qS(".digital");

setInterval(updateClock,1000);
updateClock();
function updateClock(){
    let now = new Date();
    digitalElement.innerHTML = "";
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds()
    
    digitalElement.innerHTML = `${fixaZero(h)}:${fixaZero(m)}:${fixaZero(s)}` 

    ponteiroS.style.transform = `rotate(${(6*s)-90}deg)`;
    ponteiroM.style.transform = `rotate(${(6*m)-90}deg)`;
    ponteiroH.style.transform = `rotate(${(30*h)-90}deg)`;
}
function fixaZero(time){
    if(time < 10) {
        return "0"+time;
    }
    else{
        return time;
    }
}