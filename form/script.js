//criamos uma variavel contendo um objeto com varias funções
let RUZValidator = {
    handleSubmit:(event)=>{
        event.preventDefault();
        //declaração da variavel que vai ditar se o form será enviado ou não.
        let send = true;
        //aqui declaramos os inputs que é como se fosse um array, de todos os inputs.
        let inputs = form.querySelectorAll("input");

        RUZValidator.clearErrors();
        for(let i=0; i<inputs.length;i++){
            let input = inputs[i];
            let check = RUZValidator.checkInput(input);
            
            if(check !== true) {
                send = false;
                RUZValidator.showError(input, check);
            }
        }
        if (send){
            form.submit();
        }
    },
    checkInput:(input)=>{
        let rules = input.getAttribute("data-rules");
        let inputName = input.getAttribute("name");
        if(rules !== null){
            rules = rules.split("|");
            
            for(let k in rules) {
                let rDetails = rules[k].split("=");
                switch(rDetails[0]) {
                    case "required":
                        if(input.value == "") {
                            return `o campo ${inputName} precisa estar preenchido`;
                        }
                    break;
                    case "min":
                        if(input.value.length < rDetails[1]){
                            return "Campo tem que ter no mínimo " + rDetails[1] + " caracteres";
                        } 
                    break;
                    case "email":
                        if(input.valeu != ""){
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if(!regex.test(input.value.toLowerCase())) {
                                
                                return "E-mail digitado não é válido";
                            }
                        }
                    break;
                }
            }
        }
        return true;
    },
    showError:(input, error)=>{
        input.style.borderColor = "red";

        let errorElement = document.createElement("div");
        errorElement.classList.add("error");
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement,input.nextElementSibling)
    },
    clearErrors:()=>{
        let inputs = form.querySelectorAll("input");
        for(let i = 0;i<inputs.length;i++){
            let input = inputs[i];
            input.style.borderColor = "black";
        }
        let errorElements = document.querySelectorAll(".error");
        for (i=0;i<errorElements.length;i++) {
            errorElements[i].remove();
            
        }
    }
};
// pegamos o elemento do nosso form pela class.
let form = document.querySelector(".RUZValidator");

form.addEventListener("submit",RUZValidator.handleSubmit);