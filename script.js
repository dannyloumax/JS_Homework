"use strict";

// Task 1 ----------------------------------

function getSum(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    console.log(sum);
}

let number = prompt('Пожалуйста, введите число: ', 0);
getSum(number);

// Task 2 -----------------------------------

function creditRateCalc (cost) {
    let years = 5;
    let interestOnCredit = 0;

    for (let i = 0; i < years; i++) {
        interestOnCredit += (cost/100)*17;
    }
    console.log(interestOnCredit);
}

let creditSum = prompt('Пожалуйста, введите сумму:', 0);
creditRateCalc(creditSum);

