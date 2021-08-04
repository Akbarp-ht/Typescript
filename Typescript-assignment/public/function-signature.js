"use strict";
let greeting;
greeting = (name, express) => {
    console.log(`${name}says ${express}`);
};
let calc;
calc = (NumOne, Numtwo, action) => {
    if (action === 'add') {
        return NumOne + Numtwo;
    }
    else {
        return NumOne - Numtwo;
    }
};
let logdetail;
logdetail = (manager) => {
    console.log(`${manager.name} is a ${manager.age} years old `);
};
