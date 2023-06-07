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
*/
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