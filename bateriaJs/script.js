

document.body.addEventListener("keyup",(event)=>{
    playSound(event.code.toLowerCase());
});

document.querySelector(".composer button").addEventListener("click", ()=>{
    let input = document.querySelector("#input").value;
    if(input !== ""){
        let inputArray = input.split('');
        playComposition(inputArray);
    }   
});

function playSound(sound){
    let audioSelected = document.querySelector(`#s_${sound}`);
    let keySelected = document.querySelector(`div[data-key="${sound}"]`);
    if(audioSelected) {
        audioSelected.currentTime = 0;
        audioSelected.play();
    }
    if(keySelected) {
        keySelected.classList.add("active");
        setTimeout(() => {
            keySelected.classList.remove("active"); 
        }, 200);
    }   
}
function playComposition(inputArray){
    let wait = 0;
    for(let inputItem of inputArray){
        setTimeout(()=>{
            playSound(`key${inputItem}`);
        },wait);
        wait += 250;
    }
    
    

}