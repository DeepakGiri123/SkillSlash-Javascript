class Human{
    #money;
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
        this.#money=1000;
    }

    get isAudit()
    {
        return this.age>=18;
    }

    get money()
    {
        return this.#money;
    }
    set money(money)
    {
        this.#money=money;
    }
}
let h1= new Human("Anuj",29);
console.log(h1.isAudit);

console.log(h1.money);
h1.money=100000;
console.log(h1.money);

