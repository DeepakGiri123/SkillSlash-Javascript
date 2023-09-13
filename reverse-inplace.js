

function Reverse(array)
{
    let index=0;
    while(index<=array.length/2)
    {
      let temp=array[array.length-index-1];
      array[array.length-index-1]=array[index];
      array[index]=temp;
      index++
    }
    console.log(array);
}
let array=[1,2,3,4,5]
console.log(array);
Reverse(array);