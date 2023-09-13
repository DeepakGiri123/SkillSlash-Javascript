function unshift(array, ...values) //... will be for variable arguments
{
  let index=array.length-1;
  let shift=values.length;
  while(index>=0)
  {
    array[index+shift]=array[index];
    index--;
  }
  console.log(array);
 
  index=0;
  while(index<values.length)
  {
    array[index]=values[index];
    index++;
  }
  console.log(array);

}

let fruits=["A","B","C"];
unshift(fruits,"D","E");
