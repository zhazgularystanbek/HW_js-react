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

for (let i = 0; i < 3; i++) {
    console.log(`first level: ${i}`);
    first:  for (let j = 0; j<2; j++) {
        console.log(`second level: ${j}`);
        for (let k = 0; k <3; k++) {
            if (k===2) continue first;
            console.log(`third level: ${k}`);
        }
    }
}