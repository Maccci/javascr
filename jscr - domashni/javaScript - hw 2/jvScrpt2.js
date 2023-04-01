
let myAge = prompt("Enter your age");
let fullName = 14;

let var3 = subAge()
let var4 = concatArray()
let var5 = isGreaterThan(myAge,fullName);
let var6 = dvd(subAge(), concatArray());
let var7 = checkSum();

console.log("Var 1: " + myAge);
console.log("Var 2: " + fullName);
console.log("Var 3: " + var3);
console.log("Var 4: " + var4);
console.log("Var 5: " + var5);
console.log("Var 6: " + var6);
console.log("Var 7: " + var7);
//Create 7th variable that has value “I am the “. If the fifth value is true and the 6th value is
//less then 3, log “I am the light” in the debugging console, else log “I am the darkness”. (use
//    string concatenation implementing the 7th variable)

function checkSum()
{
    if (var5 == true && var6 < 3)
    {
        return "I am the light";
    } else {
        return "I am the darkness";
    }
}
function subAge()
{
    if (myAge > 0 && myAge.toString().length == 4)
    {
        myAge = myAge.toString()  
        let part1 = myAge.substr(0,2);
        let part2 = myAge.substr(2,4);
        return Number(part2 - part1);
    }
}
function concatArray()
{
    let myAgeArray = [];
    myAgeArray = toArray(myAge);
    if(myAgeArray.length == 4)
    {
        return myAgeArray[0] + myAgeArray[1] + myAgeArray[2] + myAgeArray[3];
    }
}
function isGreaterThan(value1, value2) {            
    return value1 > value2;
}
function toArray(value){
    let Array = value.toString()
    .split('')
    .map(str => Number(str));
    return Array;
}
function dvd(var3, var4){      
  return var3 / var4;          
}