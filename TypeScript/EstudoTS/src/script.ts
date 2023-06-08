/* 
types 
let nome: string = "Riuan";

let idadeUser: number = 21;

let programador: boolean = true;

//type em arrays 

let nomes: string[] = ["Riuan", "Anderson", "Robson", "Leudo"]

let idades: number[] = [21, 21, 21];

let aceita: boolean[] = [true, false, true];

idades.push(20)


//quando precisamos adicionar um valor com um type diferente dentro de um array por exemplo, não podemos fazelo assim:

let nomes: string[] = ["Riuan", "Anderson", "Robson", "Leudo"];

nomes.push(89);

//temos de fazer assim:
//isso não é uma ótima prática, mas as vezes se torna necessário.
//--noEmitOnError
let nomes: any[] = ["Riuan", "Anderson", "Robson", "Leudo"];
nomes.push(89);


//usando types nos parametros de uma função:
function FirstLetterUpperCase(name: string){
   let  firstLetter = name.charAt(0).toUpperCase();
   return `${firstLetter}${name.substring(1)}`; 
}
FirstLetterUpperCase("riuan");

//usando types no retorno de uma função  
function FirstLetterUpperCase(name: string): string{
    let  firstLetter = name.charAt(0).toUpperCase();
    return `${firstLetter}${name.substring(1)}`; 
 }
 let nome: string = FirstLetterUpperCase("riuan");


function somar(n1:number, n2:number): string {
    return `${n1 + n2}`;
 }
 let soma: string = somar(6,4);

//diferenças entres type de retorno

 function subtrair(n1:number, n2:number): number {
    return n1 - n2;
 }
 let subtrai: number = subtrair(6,4);

//contextual typing em funções anônimas

//o TS entende o contexto do código, o exemplo a seguir demonstra que o fato de nosso array ter apenas strings faz com que o type do array seja automaticamente string.
let names = ["Riuan", "Leudo", "Anderson", "Robson"];
names.forEach(item => {
    console.log(item.toUpperCase());
});

//se o type do seu array for any, da para burlar isso fazendo uma verificação de typeof

let coisas = ["Riuan", "Leudo", "Anderson", "Robson", 90]; 
coisas.forEach(item => {
    if(typeof item === "string"){
        console.log(item.toUpperCase())
    }else {
        console.log(item);
    }
});

//types em objetos
//um dos typings mais utilizados

let user = {
    nome: "Riuan",
    idade: 21,
    treina: true
};
function starter(usuario: {nome: string, idade: number}){
    return `oi ${usuario.nome} de ${usuario.idade} anos`;
}
starter(user);

//pode acontecer de ser enviado um usuário com dados incompletos, por exemplo faltando a variável idade, isso geraria um erro na execução, porem o typescript não acusa erro.

//propriedades opcionais 

let user = {
    nome: "Riuan",
    idade: 21,
    treina: true
};
function starter(usuario: {nome: string, idade?: number}){
    if(usuario.idade !== undefined) {
    return `oi ${usuario.nome} de ${usuario.idade} anos`;
    }else{
        return `oi ${usuario.nome}`;
    }
}
starter(user);
//no código acima, podemos ver que a simples implementação do "?" tornou o nosso parâmetro "idade" em um parâmetro não obrigatório.

//union types 
//um parâmetro ou variável com multiplos tipos
//assume como number normalment
let idade: string | number = 21;
//idade pode ser string ou number
idade = "25";
 
//precisamos verificar o tipo na função caso seja utilizado algum method especifico para um tipo, como o exemplo a baixo;
function mostrarIdade(idade: string | number){
    if(typeof idade === "string"){
        console.log(idade.toUpperCase());
    }else {
        console.log(idade)
    }
}
mostrarIdade(21);
mostrarIdade("21");

//type e interface: como usar e diferenças

type Idade = string | number;

function mostrarIdade(idade: Idade){
    if(typeof idade === "string"){
        console.log(idade.toUpperCase());
    }else {
        console.log(idade)
    }
}
mostrarIdade(21);
mostrarIdade("21");

type User = {
    nome: string,
    idade: number | string
};
function resumo(usuario: User) {
    return `Olá, ${usuario.nome} você tem ${usuario.idade} anos.`
};
resumo({
    nome: "Riuan",
    idade: 21
});

//na maioria dos casos você vai poder escolher usar type ou interface, a principal diferença é: podemos "adicionar" informações ao interface no decorrer do código, já no type gera erro de duplicação.

interface User {
    nome: string,
};
interface User {
    idade: string | number
};

function resumo(usuario: User) {
    return `Olá, ${usuario.nome} você tem ${usuario.idade} anos.`
};
resumo({
    nome: "Riuan",
    idade: 21
});

//type assertions
let idade = document.getElementById("idade") as HTMLInputElement;
//especificando que tipo de elemento é "idade"

console.log( idade.value);

//types literais 
type Alinha = "left" | "right" | "center";
type Nome = "Riuan" | "riuan";

let nome: Nome = "Riuan";

function mostraTexto(texto: string, alinhamento: Alinha ) {
    //.............
}
mostraTexto(nome, "center");
mostraTexto(nome, "right");
*/
//inferência literal
//gerando um erro:
//o código abaixo foi implementado para gerar um union type para ser utilizado em method resolvendo o erro já que agora method só aceita GET ou POST, e não só o parâmetro da função
type Methods = "GET" | "POST";
function fazerRequisicao(url: string, method: "GET" | "POST") {
    //.............
}
//independente de se utilizar objetos ou variáveis separadas, o erro ocorre no mesmo lugar,o erro ocorre por conta da facilidade de mudanças que o atributo method pode sofrer, o código em si não está errado, no momento.
let url: string =  "https://google.com.br";
let method: Methods = "GET";
fazerRequisicao(url,method);

//se fossemos implementar com um objeto:
type Requisicao = {
    url: string,
    method: "GET" | "POST"
}
let req: Requisicao = {
    url: "https://google.com.br",
     method: "GET"
    };
fazerRequisicao(req.url,req.method);
//isso é protejer a informação dos dois lados.
