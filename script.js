"use strict";

// Task 1 -------------------------------

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// The first option
fibonacci.forEach(function (number) {
    console.log(number);
});

// The second option
fibonacci.forEach(number => console.log(number));

// Task 2 -------------------------------

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

// The first option
const users1 = users.map(function (user, index) {
    return `member ${index + 1}: ${user}`;
});

// The second option
const users2 = users.map((user, index) => `member ${index + 1}: ${user}`);

console.log(users1);
console.log(users2);

// Task 3 -------------------------------

const numbers = [7, -4, 32, -90, 54, 32, -21];

// The first option
const numbers1 = numbers.filter(function (number) {
    return number >= 0;
});

// The second option
const numbers2 = numbers.filter(number => number >= 0);

console.log(numbers1);
console.log(numbers2);

// Task 4 -------------------------------

const fibonacciTask4 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// The first option
const sumFibonacci = fibonacciTask4.reduce(function (sum, current) {
    return sum += current;
});

// The second option
const sumFibonacci2 = fibonacciTask4.reduce((sum, current) => sum += current);

console.log(sumFibonacci);
console.log(sumFibonacci2);

// Task 5 -------------------------------

const numbersTask5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// The first option
const firstEvenNumber = numbersTask5.find(function (number) {
    return number % 2 == 0;
});

// The second option
const firstEvenNumber2 = numbersTask5.find(number => number % 2 == 0);

console.log(firstEvenNumber);
console.log(firstEvenNumber2);