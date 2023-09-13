let fruits=["Apple", "Banana", "Orange"];

console.log(fruits[0]); //output=apple

console.log(fruits.at(-1)); //output=Orange note: with the help of at and negative  , we can do negative indexing from last element of array.

console.log(fruits.at(0));

//console.log(fruits);

//fruits[0]="Mango";
//console.log(fruits);

fruits.push("Mango","Pineapple"); //Remove from the start of the array

console.log(fruits);

const popped=fruits.pop(); //Remove from the end of the array

console.log(popped);

let fruits1=["Apple1", "Banana1", "Orange1"];
console.log(fruits1);
const removed=fruits1.shift(); //Note:shift will remove the element from first of the array

console.log(removed);
console.log(fruits1);

let fruits2=["A","B","C"];
fruits2.unshift("D","E");

console.log(fruits2);
