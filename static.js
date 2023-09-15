class Human{

    static population=0;

    constructor(name, age)
    {
        this.name=name;
        this.age= age;
        Human.population+=1;
    }

    static generateRandomHuman()
    {
        let name="Human" +Math.floor(Math.random()*100);
        let age=Math.floor(Math.random()*100);
        return new Human(name,age);
    }
}

let h1=new Human("anuj",29);
let h2=new Human("Ravi",30);

console.log(h1);
console.log(h2);
console.log(Human.population);

const h3=Human.generateRandomHuman();
console.log(h3);