"use strict";

// Task 1 -------------------------------

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// The first option
fibonacci.forEach(function (number) {
    console.log(number);
})

// The second option
fibonacci.forEach(number => console.log(number));

// Task 2 -------------------------------

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

const users1 = users.map(function (user, index) {
    return `member ${index + 1}: ${user}`;
})

const users2 = users.map((user, index) => `member ${index + 1}: ${user}`);

console.log(users1);
console.log(users2);