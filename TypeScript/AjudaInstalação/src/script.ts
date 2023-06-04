let num1 = document.getElementById("number-1") as HTMLInputElement;
let num2 = document.getElementById("number-2") as HTMLInputElement;
let result = document.getElementById("result");
let button = document.getElementById("button");



function calcular(n1: number, n2: number){
    return n1 + n2;
}
if(button !== null){
    button.addEventListener("click",function() {
    if(result !== null){
        result.innerHTML = calcular(+num1.value, +num2.value).toString();
    }
});
}