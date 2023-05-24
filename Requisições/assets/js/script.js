//sincrono e assincrono

//Síncrono = uma coisa espera pela outra

//assincrona = executa sem ordem, por exemplo, se executarmos um código
//onde uma variavel depende de uma diretamente acima, a variavel que d
//e outra pode ser executada antes, ou ao mesmo tempo, o que poderia gerar
//um erro de variavel inexistente.

//uma requisição é o javaScript acessando um endereço especifico
//quando é criada uma requisição, a requisição sai do computador
//vai para linha, para rede, para o servidor, filtra, enfim, tem
//um tempo de espera, e nosso trabalho é otimizar esse tempo.
//e esse tempo ainda conta com a pega de dados do servidor,
//e o envio dele para gente. Não é instantaneo como definir uma variavel

//o código assincrono ajuda nessa espera, não de forma a aumentar
//a velocidade, mas de forma que seu código sendo assincrono,
//todas as outras funcionalidades vão funcionar enquanto a requisição é feita
//isso dá a impressão de mais fluidez. A gente pode também fazer
//as requisições ao iniciar o site, para meio que deixar algumas
//funcionalidades prontas por trás das cortinas.

//como a web funciona? req e resp
//req é um acesso a algo.

//Request = Requisição.
//junto das requisições temos:
// -> cabeçalhos / Headers (entregadores de informações)
//corpo / body ()
//Exemplo: Quando faço a requisição para entrar no AliExpress/Amazon
//há a requisição junto do cabeçalho que encapsula informações como
//qual máquina esta acessando, que usuario, qual SO, etc.

//Response = Resposta.
// -> cabeçalhos Headers: aqui recebemos cabeçalhos de resposta,
//não aparecem na tela e manda informações internas. Como por exemplo
//"salve a logo do aliEsxpress durante 5 horas, para facilitar no"
//próximo acesso.
// -> Corpo / Body: mais utilizado, para enviar ao requisitor 
//uma resposta como um HTML ou mesmo um texto.

//como uma API funciona?
//apllication programing interface
//forma que convecionamos de fazer uma comunicação entre um software
//e outro.

//forma de se comunicar entre uma máquina e outra. não precisa de uma
//interface visual, só precisa de uma mensagem em uma determinada
//linguagem que é: Padrão JSON

//JSON: algo parecido com objetos do Javascript. JavaScript Object
// notation

//podemos programar o JavaScript para de tempos em tempos ele
//mesmo fazer uma requisição para atualização de alguma página,
// como atualização de posts dos usuarios. nisso utilizariamos o JSON
// para fazer a comunicação de uma máquina para outra.

//após ocorrer a requisição de baixo dos panos, o servidor dá a 
//resposta em forma de um array com varios "objetos" com vários "
//atributos" internos.

//o que é um callback?

//call back = ligar de volta

//exemplo

//const button = document.querySelector("#button");

//button.addEventListener("click", () => {
    //return window.alert("Clicou no botãozinho")
//});

//o callback neste código é a própria arrow function, que recebe
//algum comando de alguma coisa em determinado tempo ou condição e
//retorna algo
//é uma função que crio para ser executada num futuro.
//um callback aplicado a requisição é a mesma coisa

/* uma explicação de como funciona o callback em uma requisição
portugol:
função para quando houver click no botão(){
    -requisição a url x
    -ta aqui o callback para quando você tiver a resposta
    == callback
    ///(quando receber a resposta, executar o callback)
    */

    //mão na massas para requisições
    //https://jsonplaceholder.typicode.com/posts

    //fetch() função do próprio javaScript para fazer Requisições
    //then() significa "e então", ou seja, utilizamos o fetch para
    //iniciar a requisição pelo parametro do url, e utilizamos then
    //para definir o que acontecerá quando recebermos a resposta.
    /*function clicou() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            if(response.status === 150) { 
                console.log("meu pou");
                //aqui aprendemos a fazer condicionais dependentes
                //da resposta do servidor pela requisição
            };
            //recebemos uma resposta com vários
        })
    }
    document.querySelector("#button").addEventListener("click", clicou);*/

    //outro exemplo 
    //function clicou() {
        //fetch("https://jsonplaceholder.typicode.com/posts")
        //.then((response) => {
            //return response.json();//processo assincrono
        //})
        //.then((json) => {
            //alert(json[0].title);
            //aqui podemos utilizar um loop para rodar todos os itens
            //do array procurando por alguma informação, ou mesmo
            //reordenar um array
        //})
        //alert("OPA, CLICOU!");
        //esse alert sai primeiro do que o alert do then, pois ele não está esperando resposta alguma
        //quando fazemos uma requisição dessa forma, o server nos envia
        //um array com objetos
        //muitas vezes você está acessando um site e pensa que ele esta
        //estático, mas ele sempre está fazendo requisições internas
    //}
    //document.querySelector("#button").addEventListener("click", clicou);

    //entendendo promise = promessa
    //todo fetch retorna uma promessa, porque a requisição vai ser
    //feita em algum momento. Um objeto que o resultado final será no futuro.
    //o then é usado para quando essa requisição é solicitada e a promessa é
    //entregue ai o then funciona como "ai então": procedimento

    //deu o fetch, then (quando eu tiver a resposta da requisição, executa, then (quando eu tiver a resposta executa))
    //estudando um pouco mais a fundo o conceito de promise, aprendi sobre catch, que é a função (then) porém quando ocorre um erro, no caso 
    //o parametro entrando na função reject, o then normal funciona quando o parametro comum consegue entrar na função resolve
    
    //podemos aninhar promise em variavel e utilizar-se da função promise.all (no caso, só vamos rodar algo com base naquela classe
    //de promisse quando todas tiverem suas resposta. Também temos a promisse.race, que pode mudar a ordem do recebimento de respostas 
    // com base na velocidade)

    //entender melhor async e await, e try catch

    //também ainda em requisições utilizando apenas catch e then
    //temos o finally, que geralmente é usado no final, que por exem
    //plo podemos utlizar para tentar repetir a requisição sem o usuário fazer nada
    //ele também é utilizado quando a requisição dá certo

    //estudo sobre method (metódos);
    //GET = pegar informações
    //POST = enviar informações, muda de api para api
    //PUT = utilizamos quando queremos alterar alguma informação
    /*
    //DELETE = deletar uma informação
function clicou() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        alert("title do primeiro post:" + " " + json[0].title);
    })
    .catch(() => {
        alert("Deu problema na requisição");
    })

    
}
*/
//document.querySelector("#button").addEventListener("click", clicou);
//document.querySelector("#inserir").addEventListener("click", inserir);
/*
function inserir() {
    fetch(
        "https://jsonplaceholder.typicode.com/posts", 
        {
            //volta o status 201, de elemento criado
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Título de teste",
                body: "Corpo de teste",
                userId: 2
            })
        }//pegando a resposta do fetch a gente converte em objeto
    ).then((response) => {
        return response.json();
    }).then((json) => {
        console.log(json);
    }).catch((error) => {
        alert("Deu algo errado meu mano:" + " " + error);
    })

    //quando se trata do método post, podemos pensar da seguinte forma: utilizar values de inputs ou mesmo variaveis
    //para postar ou mesmo pegar algumas informações com get
}

//o mesmo código utilizando await e async
//o await força o fetch a parar, tranformando praticamente em uma função síncrona, mas em relação ao site todo, continua async

async function clicou() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let json = await response.json();
        alert("Título do primeiro post: " + " " + json[0].title)
    } catch(error) {
        alert("Então:" + " " + error);
    }  
}

async function inserir() {
    try{
        let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts", 
        {
            //volta o status 201, de elemento criado
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Título de teste",
                body: "Corpo de teste",
                userId: 2
            })
        });
    let json = await response.json();
    console.log(json);
    }catch(error){
        console.log(`então mano: ${error}`);
    }
}
//depois de estudar um pouco sobre requisições, já tenho conhecimento suficiente para recriar a netflix. 
//a única coisa que falta é o método de reprodução dos vídeos.
*/

//PROJETO BLOG FAKE
//fiz sozinho uma grande parte, precisa de algumas condições ainda
document.querySelector("#inserirButton").addEventListener("click", inserir);
const titlePost = document.querySelector("#titlePost");
const bodyPost = document.querySelector("#bodyPost");
const posts = document.querySelector(".posts");
//código ta muito ruim, mas eu consigo melhorar ele
postsFunc();
async function inserir() {
    if(bodyPost.value && titlePost.value) {
    try{
        let response = await fetch(
       "https://jsonplaceholder.typicode.com/posts",
       {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: titlePost.value,
            body: bodyPost.value,
            userId: 3
        })
        
       }
    )
    let json = await response.json();
    //console.log(json);
    }catch(error) {
        alert(response.status + error);
    };
        postsFunc();
        titlePost.value = "";
        bodyPost.value = "";
    } else {
        alert("Todos os campos devem estar preenchidos.")
    }   
        
    
}

async function postsFunc() {
    try{
        posts.innerHTML = "Carregando...";
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let json = await response.json();


        if(json.length > 0) {
            posts.innerHTML = "";
            for(let i in json) {
            
                //let h1 = document.createElement("h1");
                //h1.innerHTML += json[i].id + " - " + json[i].title;
                //posts.appendChild(h1);

                //let bodyPost = document.createElement("p");
                //bodyPost.innerHTML += json[i].body;
                //posts.appendChild(bodyPost);  
                let postHTML = `<div><h1>${json[i].id} - ${json[i].title}</h1></div><div><p>${json[i].body}</p><div>`  ;
                posts.innerHTML += postHTML;
        }} else{
            posts.innerHTML = "Nenhum post foi encontrado..";
        }
    }catch(error) {
        alert(error);
    }
   
}
/*
//document.write("Mano, isso ta faltando no curso");
//descontrução de objetos:

pessoa = { 
    name: "Riuan",
    sobrenome: "Maia",
    idade: 24,
    nomeCompleto(name,sobrenome, sexo = "f") {
        return `${this.name} ${this.sobrenome}`;
    }
}

let {name, sobrenome, idade} = pessoa;

document.querySelector("#comecarButton").addEventListener("click", comecar);
document.querySelector("#pararButton").addEventListener("click", parar);
let timer;
function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = `${h}:${m}:${s}`;

    document.querySelector(".Relógio").innerHTML = txt;
}
function comecar() {
    timer = setInterval(showTime, 1000);
}
function parar() {
    clearInterval(timer);
}

// JSON.parse transforma uma string no formato json em json, 
// já o JSON.stringify() transforma um objeto numa string formato
//json
*/