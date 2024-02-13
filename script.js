"use strict";

// Task 1 -------------------------------------

let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

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
let userNameNumberFirstWay = +userName;

let countStringSecondWay = count.toString();
let userNameNumberSecondWay = Number(userName);

let countStringThirdWay = String(count);
let userNameNumberThirdWay = parseInt(userName);

// Task 4 -------------------------------------

let a = 1;
let b = 2;
let c = 'белых медведей';

console.log("" + a + b + " " + c);

// Task 5 -------------------------------------

let variable1 = 'доступ';
let variable2 = 'морпех';
let variable3 = 'наледь';
let variable4 = 'попрек';
let variable5 = 'рубило';

console.log(variable1.length + variable2.length + variable3.length + variable4.length + variable5.length);

// Task 6 -------------------------------------

let phrase1 = String(`Variable: %variable name% have type: %type variable%`);
let phrase2 = Number(`Variable: %variable name% have type: %type variable%`);
let phrase3 = Boolean(`Variable: %variable name% have type: %type variable%`);

console.log(phrase1);
console.log(phrase2);
console.log(phrase3);

// Task 7 -------------------------------------

let userFirstName = prompt('Пожалуйста, введите Ваше имя:', 'Ваше имя');
let userAge = prompt('Пожалуйста, введите Ваш возраст:', 18)

console.log(userFirstName);
console.log(userAge);


// Task 1 (advanced level)---------------------

let A = 4;
let B = 3;

B = [A, A = B][0];

console.log(A, B);


// Task 2 (advanced level)---------------------

let codeword1 = 'обернись';
let codeword2 = 'неужели';
let codeword3 = 'огурцы';
let codeword4 = 'липкие';
let codeword5 = ',!';

console.log(codeword1[1] + codeword2[1] + codeword3[1] + codeword4[1] + codeword5[1]);