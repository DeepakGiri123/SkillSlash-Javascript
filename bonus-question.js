let salary=60000;

let totalsalary;
let bonus;

if(salary>50000)
{
     bonus=5000;
}
else if(salary>=20000)
{
     bonus=3000;
    
}
else
{
    bonus=2000;
}
totalsalary=salary+bonus;
console.log("Total Salary:", totalsalary);