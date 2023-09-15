class Human{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    sayHello()
    {
        console.log("Hello from", this.name);
    }
     canVote()
    {
        return this.age>=18;
    }
}

let h1=new Human("anuj",29);
let h2=new Human("ravi",30);
console.log(h1.age);
console.log(h2.age);

h1.sayHello();
h1.age=17;
console.log(h1.canVote());