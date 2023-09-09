function SimpleInterest (p,r,t)
{
    const si=(p*r*t)/100;
    return si;
}

const interest=SimpleInterest(1000,8,2);
console.log("Simple interest:", interest);