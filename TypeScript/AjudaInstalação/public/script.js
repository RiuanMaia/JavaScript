var num1 = document.getElementById("number-1");
var num2 = document.getElementById("number-2");
var result = document.getElementById("result");
var button = document.getElementById("button");
function calcular(n1, n2) {
    return n1 + n2;
}
if (button !== null) {
    button.addEventListener("click", function () {
        if (result !== null) {
            result.innerHTML = calcular(+num1.value, +num2.value).toString();
        }
    });
}
