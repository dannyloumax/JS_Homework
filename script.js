"use strict";

// Task 1 ----------------------------------

let a = 'true';
let b = false;
let c = 17;
let d = undefined;
let e = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

// Task 2 ----------------------------------

let height = 15;
let weight = 20;

if (height > weight) {
    console.log(height);
} else {
    console.log(weight);
}

// Task 3 ----------------------------------

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}