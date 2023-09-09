function countDigits(num)
{
    let count=0;

    while(num>0)
    {
        num=Math.floor(num/10);
        count++;
    }
    return count;
}
function countNoofFive(num)
{
    let count=0;
    while(num>0)
    {
        const digit=num%10;
        if(digit==5)
        {
            count++;
        }
        num=Math.floor(num/10);
    }
    return count;
}

const noofdigits=countDigits(333);
console.log("No of digits in given number",noofdigits);

const nooffives=countNoofFive(5557755675);
console.log("Number of 5's in given digit",nooffives);

