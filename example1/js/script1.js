"use strict";


// result:
// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const len = 7;
// for (let i = 1; i < len; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n';
// }

// console.log(result);

// for (let i = 0; i < 3; i++) {
//     console.log(`first level: ${i}`);
//     first:  for (let j = 0; j<2; j++) {
//         console.log(`second level: ${j}`);
//         for (let k = 0; k <3; k++) {
//             if (k===2) continue first;
//             console.log(`third level: ${k}`);
//         }
//     }
// }

const doll = 84;
const euro = 90;
const tenge  = 0.21;
const rub = 1.32;

function kurs(amount, valuta) {
    return (amount * valuta);
}

console.log(kurs(500, doll));
kurs(500, euro);
kurs(500, tenge);
kurs(500, rub);

let a = 'text text';
console.log(a.slice(2, 7));