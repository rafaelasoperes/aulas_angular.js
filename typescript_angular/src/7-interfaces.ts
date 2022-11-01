//interfaces (type x interface)

type robot = {
    readonly id: number | string;
    name: string;
}

//interface são parecidas com a type, mas ela não vai o sinal de (=) depois do nome, e são mais utilizadas quando trabalhadas com class.
interface robot2 {
    readonly id: number | string;
    name: string;
}

const bot1: robot = {
    id:"1",
    name: "megaman"
}

const bot2: robot2 = {
    id:"1",
    name: "megaman"
}

console.log(bot1);
console.log(bot2);

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor (id:string|number, name:string) {
        this.id = id;
        this.name = name;
    }
    sayHello():string {
        return `Hello i'm ${this.name}`;
    }
}

const p = new Pessoa(1, "Rafaela");
console.log(p.sayHello());