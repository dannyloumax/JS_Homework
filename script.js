"use strict";

// Task 1 ----------------------------------

function getSum(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    console.log(sum);
}

let number = prompt('Пожалуйста, введите число: ');
getSum(number);