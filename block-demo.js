let a=100;
let b=200;
console.log("outside top:", a);
console.log("outside top:", b);

{
    let a=10;
    let b=20;
    console.log("inside:", a);
    console.log("inside:", b);
}

console.log("outside:", a);
console.log("outside:", b);

