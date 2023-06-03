//initial data
let actualColor = "black";
let screen = document.querySelector("#tela");
let context = screen.getContext("2d");
let draw = false;
let mouseX = 0;
let mouseY = 0;
//events
document.querySelectorAll(".colorArea .color").forEach(item => {
    item.addEventListener("click",cClickEvent);
});
screen.addEventListener("mousedown", mouseDown);
screen.addEventListener("mousemove", mouseMove);
screen.addEventListener("mouseup", mouseUp);

document.querySelector(".clear").addEventListener("click", clearScreen);

//functions
function cClickEvent(e){
    let color = e.target.getAttribute("data-color");
    actualColor = color;

    document.querySelector(".color.active").classList.remove("active");

    e.target.classList.add("active");
}
function mouseDown(e){
    draw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}
function mouseMove(e){
    if(draw){
        canDraw(e.pageX, e.pageY);   
    }
}
function mouseUp(){
    draw = false;
}
function canDraw(x,y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    context.beginPath();
    context.lineWidth = 5;
    context.lineJoin = "round";
    context.moveTo(mouseX,mouseY);
    context.lineTo(pointX,pointY);
    context.closePath();
    context.strokeStyle = actualColor;
    context.stroke();

    mouseX = pointX;
    mouseY = pointY;
}
function clearScreen(){
    context.setTransform(1,0,0,1,0,0);
    context.clearRect(0,0,context.canvas.width,context.canvas.height);
}