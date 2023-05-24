class Character {

    _life = 1;
    maxLife = 1;
    attack = 1;
    defense = 1;

    constructor(name) {
        this.name = name;
    }
    get life() {
        return this._life;
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
 }

 class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
 }

 class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 4;
        this.maxLife = this.life;
    }
 }

 class LittleMonster extends Character {
    constructor() {
        super("Little Monster");
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
 }

 class BigMonster extends Character {
    constructor() {
        super("Big Monster");
        this.life = 110;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
 }

 class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 = fighter1;
        this.fighter1El = fighter1El;
        this.fighter2 = fighter2;
        this.fighter2El = fighter2El;
        this.log = logObject;
    }

    
    start() {
        this.update();
       // evento do botão de atacar
        this.fighter1El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1));
    }
    

    update() {
        //fighter1
        this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(2)}HP`;
        let f1pct = ((this.fighter1.life / this.fighter1.maxLife) * 100);
        //aqui a gente está transformando a quantidade de vida em porcentagem
        this.fighter1El.querySelector(".bar").style.width = f1pct + "%";
        //acima estamos mudando o style de bar de acordo com a porcentagem de f1pct
        
        //fighter2
        this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)}HP`;
        let f2pct = ((this.fighter2.life / this.fighter2.maxLife) * 100);
        this.fighter2El.querySelector(".bar").style.width = f2pct + "%";

    }
    doAttack(attacking, attacked) {
        
        if (attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage("Atacando cachorro morto.");
            return;
        }
    
        //fatores de ataque e defesa
        let attackFactor = (Math.random() * 2).toFixed(2);
        let actualAttack = (attacking.attack * attackFactor);

        let defenseFactor = (Math.random() * 2).toFixed(2);
        let actualDefense = (attacked.defense * defenseFactor);

        if(actualDefense < actualAttack) {

            if(attacking == this.fighter1 ) {
                //console.log(actualAttack + " - " + actualDefense)
                this.fighter2.life = this.fighter2.life - (actualAttack - actualDefense);
                this.log.addMessage(`${attacking.name} atacou ${attacked.name} e causou ${(actualAttack - actualDefense).toFixed(2)} de dano.`);
            }
            else {
                //console.log(actualAttack + " - " + actualDefense)
                this.fighter1.life = this.fighter1.life - (actualAttack - actualDefense);
                this.log.addMessage(`${attacking.name} atacou ${attacked.name} e causou ${(actualAttack - actualDefense).toFixed(2)} de dano.`);
            } 
        } else {
            //console.log(actualAttack + " - " + actualDefense)
            this.log.addMessage(`${attacking.name} atacou porém a defesa do inimigo venceu e não houve dano!`)
        }

        //console.log(actualAttack, " - ", actualDefense)
        this.update();
        this.log.addMessage(`Agora a vida de ${attacked.name} é: ${attacked.life.toFixed(2)}`);
    }
 
}

//não entendi tão bem, mas vou prosseguir

class Log {
    list = [];
    //linha acima declara o array que vai ser a lista

    constructor(listEl) {
        this.listEl = listEl;
        //como o array vai funcionar como uma ul, declaramos listEl que é onde vão ser incrementados os lis
    }

    addMessage(msg){
        this.list.push(msg);
        //recebe a mensagem e adiciona a lista
        this.render();
        //roda a função render com base no objeto que é o próprio log 
    }

    render() {
        this.listEl.innerHTML = "";
        //a linha acima limpa o list

        for (let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
        //cria-se a variavel i para enumerar os elementos dentro de list, e concatena-los.
    }
}
 

