// the main purpose of javascript code write in node js i want to show that we can 
// do everything as a javascript to node js diffrent only node js server side and 
// javascript client side 


// create simple programm

let a = 10;
let b = 20;
console.log(a + b);

// create function 

function add(a, b) {
    return a * b;
}
console.log("multiplication=>", add(45, 2));

// create a loop

for (let a = 0; a <= 10; a++) {
    console.log("count=>" + a);
}

// create a swithc statement 

let day = 1;
switch (day) {
    case 1:
        console.log("today is sunday");
        break;

    case 2:
        console.log("today is monday");
        break;

    case 3:
        console.log("today is tuesday");
        break;

    case 4:
        console.log("today is wednesday");
        break;

    case 5:
        console.log("today is thursday");
        break;

    case 6:
        console.log("today is friday");
        break;

    case 7:
        console.log("today is saturday");
        break;
    default:
        console.log("valid 1-7")

}


// create array
let product = [10, 50, 60, 20, 60, 5, 4];
for (let i = 0; i < product.length; i++) {
    console.log("array print=>", i);
}

// if statement in node js

let age = 25;
if (age >= 18) {
    console.log("yes she is voter")
} else {
    console.log("she is not voter");
}