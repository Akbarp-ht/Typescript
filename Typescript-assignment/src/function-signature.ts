let greeting:(a:string,b:string)=>void;

greeting=(name:string,express:string)=>
{
   console.log(`${name}says ${express}`);
   
}


let calc:(a:number,b:number,c:string)=>number;

calc=(NumOne:number,Numtwo:number, action:string)=>
{
    if(action==='add')
    {
        return NumOne+Numtwo;
    }
    else
    {
        return NumOne-Numtwo;
    }
}

let logdetail:(obj:{name:string,age:number})=>void;

logdetail=(manager:{name:string,age:number})=>
{
    console.log(`${manager.name} is a ${manager.age} years old `);
}