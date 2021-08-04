let greet:Function;


greet=()=>
{
    console.log("hello,again");

}

const add=(a:number,b:number,c:number|string=10)=>
{
    console.log(a+b);
    console.log(c);

}
add(4,5);

const minus=(a:number,b:number):number=>
{
    return a-b;
}
let result=minus(10,5);