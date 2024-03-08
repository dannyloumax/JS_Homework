"use strict";

// Task 1 -------------------------------

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// The first option
fibonacci.forEach(function (number) {
    console.log(number);
})

// The second option
fibonacci.forEach(number => console.log(number));