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

// Task 5 ----------------------------------

function getSum(a, b) {
    if (a === b) {
        return a || b;
    }

    let sum = 0;
    let startNum = Math.min(a, b);
    let endNum = Math.max(a, b);

    for (let i = startNum; i <= endNum; i++) {
    sum += i;
    }

    return sum;
}

console.log(getSum(1, 5));


// Task 6 ----------------------------------

function fooBoo(bool, foo, boo) {
    if (bool) {
        foo();
    } else {
        boo();
    }
}

console.log(fooBoo(true, () => console.log('foo'), () => console.log('boo')));