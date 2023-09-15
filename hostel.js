class hosteler{
    constructor(name, money)
    {
        this.name=name;
        this.money=money;
    }

    party()
    {
        if(this.money >=100)
        {
            this.money=this.money-100;
            console.log("Party all night long!");
        }
        else
        {
            console.log("Damn it");
        }
    }

    borrowMoney(hosteler)
    {
        if(hosteler.money>=200)
        {
            this.money=this.money+200;
            hosteler.money=hosteler.money-200;
        }
        else{
            console.log("Sorry i don't have money");
        }
    }
}
const h1=new hosteler("Anuj",300);
h1.party();
h1.party();
h1.party();
h1.party();

const anuj= new hosteler("Ravi",1000);
h1.borrowMoney(anuj);
console.log(anuj.money);