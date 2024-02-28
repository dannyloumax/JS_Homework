"use strict";

// Task 1 ----------------------------------

function calcSum(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

let number = prompt('Пожалуйста, введите число: ', 0);
console.log(calcSum(number));

// Task 2 -----------------------------------

function calcCreditRate(cost) {
    let years = 5;
    let interestOnCredit = 0;

    for (let i = 0; i < years; i++) {
        interestOnCredit += (cost/100)*17;
    }
    return interestOnCredit;
}

let creditSum = prompt('Пожалуйста, введите сумму:', 0);
console.log(calcCreditRate(creditSum));


// Task 3 ----------------------------------

function trimString(str, from, to) {

}

// Task 4 ----------------------------------

function getSumNumber(num) {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    return sum;
}

let numberTask3 = prompt('Введите номер:', 0);
console.log('Сумма чисел равняется', getSumNumber(numberTask3));