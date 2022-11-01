// classes
class Character {
    protected name?: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

//
//Magician : subclass
class Magician extends Character {
    magicPoints: number;
    constructor(
        name: string,
        stregth: number,
        skill: number,
        magicPoints:number
    ) 
    {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Ryu" ,10, 98);
const p2 = new Magician("Ryu" ,9, 30, 100);
p2.attack()

/*
Data Modifiers
Public - todos podem acessar.
Private - somente a class pode acessar.
protected - somente a class e as suas subclasses podem acessar.
*/