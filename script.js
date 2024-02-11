"use strict";

// Task 1 -------------------------------------

let x = 20;
let y = 58;
let z = 42;
let sum = x + y + z;

console.log(sum);

// Task 2 -------------------------------------

let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let daysInYear = 365;

let yourAge = prompt ("Введите Ваш возраст: ", 18);
let myAgeInSeconds = secondsInMinute * minutesInHour * hoursInDay * daysInYear * yourAge;

alert(`Ваш возраст составляет ${myAgeInSeconds} секунд!`);

// Task 3 -------------------------------------

let count = 42;
let userName = '42';

let countStringFirstWay = "" + count;
let userNameIntFirstWay = +userName;

let countStringSecondWay = count.toString();
let userNameIntSecondWay = Number(userName);

let countStringThirdWay = String(count);
let userNameIntThirdWay = parseInt(userName);

