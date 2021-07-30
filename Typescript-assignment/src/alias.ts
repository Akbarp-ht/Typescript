type StringorNum = number|string
type objectwithNum= {name:string,uid:StringorNum}

const logdetails=(uid:StringorNum,item:string)=>
    {
       console.log(`${item}has a uid of ${uid}` )
    }

const greets=(user:objectwithNum)=>
{
    console.log(`${user.name}, says hello!`);
}