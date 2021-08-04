"use strict";
let greet;
greet = () => {
    console.log("hello,again");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(4, 5);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 5);
