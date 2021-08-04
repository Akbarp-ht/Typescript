"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('joe', 'work on the joe website', 700);
const invTwo = new Invoice('troy', 'work on the troy website', 800);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invoices.push({ name: 'micheal' });
console.log(invoices);
