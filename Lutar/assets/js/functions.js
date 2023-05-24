
const characterDefaut = {
    name: "",
    life: 1,
    attack: 0,
    defense: 0,
    maxLife: 0
}
const createKnight = (name) => {
    return {
        ...characterDefaut,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}
const createSorcerer = (name) => {
    return {
        ...characterDefaut,
        name,
        life: 70,
        maxLife: 70,
        attack: 15,
        defense: 6
    }
}
const littleMonster = () => {
    return {
        ...characterDefaut,
        name: "littleMonster",
        life: 40,
        maxLife: 40,
        attack: 6,
        defense: 5
    }
}
const bigMonster = () => {
    return {
        ...characterDefaut,
        name: "BigMonster",
        life: 110,
        maxLife: 110,
        attack: 11,
        defense: 8
    }
}
 
const stage =  {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    start(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.fighter1El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1));

        this.update();
    },
    update() {
        //fighter1
        this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)}HP `;
        ///life - fighter1
        let f1pct = (this.fighter1.life)/(this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector(".bar").style.width = f1pct + "%";


        //fighter2
        this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)}HP `;
        let f2pct = (this.fighter2.life)/(this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector(".bar").style.width = f2pct + "%";

        

    },
   
    doAttack(attacking, attacked) {
       
        
        if(attacked.life <= 0 || attacking.life <= 0) {
            log.addMessage("alguém morreu, não pode ocorrer ataques!");
            return;
        }
        const attackFactor = ((Math.random()) * 2).toFixed(2);
        const defenseFactor = ((Math.random()) * 2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;
        
        log.addMessage(`${actualAttack.toFixed(2)} - ${actualDefense.toFixed(2)}`);
        if(actualAttack > actualDefense) {
            attacked.life = attacked.life - actualAttack;
            log.addMessage(`${attacking.name} atacou e causou ${actualAttack.toFixed(2)} em ${attacked.name}`);
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
        } else {
            log.addMessage("Defesa feita com sucesso!");
        }
        
        this.update();
        
    }
       
}

const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },
    render() {
        let logEl = document.querySelector(".log");
        logEl.innerHTML = "";

        for (let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        }

    }
}
