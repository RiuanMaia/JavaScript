const qS = (el) => document.querySelector(el);

setInterval(()=>{
    let Data = new Date;

    let hours = Data.getHours();
    let minutes = Data.getMinutes();
    let seconds = Data.getSeconds();
     
    qS(".hours").innerHTML = `${formatTime(hours)}`;
    qS(".minutes").innerHTML = `${formatTime(minutes)}`;
    qS(".seconds").innerHTML = `${formatTime(seconds)}`;

},1000);

function formatTime(element) {
    return element < 10 ? "0" + element : element;
}