let character:string;
let number:number;
let IsLoogedIn:boolean;

character='good';
//character=20
number=54;
//number='bad';
IsLoogedIn=true;
//IsLoogedIn='54';

//Arrays:
let animals:string[]=[];
animals.push("dog");

//Union types:
let mixtures:(string|number|boolean)[]=[];

mixtures.push("soething");
mixtures.push(54321);
mixtures.push(false);
console.log(mixtures);

//objects
let colors:object;
colors={
    name:'red',
    code:45
}

let anothercolors:{
    color_name: string,
    colorcode:number,
    flower:string
}
anothercolors={
    color_name:'pink',
    colorcode:56425,
    flower:'rose'
}
