"use strict";

let a = 78;

if (a > 50) {
    console.log('много');
} else if (a < 50) {
    console.log('мало');
} else {
    console.log('Правда!');
}

let b = 80;
(b === 50) ? console.log('trueee') : console.log('falseeee');

let c = 20;
switch (c) {
    case 50:
        console.log('false');
        break;
    case 25:
        console.log('true');
        break;
    default:
        console.log('try again!');
        break;
}

console.log(25 || null && !3);
