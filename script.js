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

// Task 4 ----------------------------------

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

// Task 5 ----------------------------------

let number = prompt('Введите число')

if (number % 5 === 0 && number % 3 !== 0) {
    alert('Fiz');
} else if (number % 3 === 0 && number % 5 !== 0) {
    alert('Buz');
} else if (number % 5 === 0 && number % 3 === 0) {
    alert('FizBuz');
} else {
    alert('Число не делится на 3 или 5!');
}

// Task 6 ----------------------------------

let age = prompt('Введите Ваш возраст:');

if (age >= 18) {
    alert('Попей пивка');
} else if (age >= 16 && age < 18) {
    alert('Можешь выкурить сигаретку, только маме не говори');
} else {
    alert('Пей колу');
}

// Task 7 ----------------------------------

let direction = prompt('В какую сторону Вы бы хотели отправиться?:');

switch (direction) {
    case 'юг':
        alert('на юг пойдешь счастье найдешь');
        break;
    case 'север':
        alert('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        alert('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        alert('на восток пойдешь разработчиком станешь');
        break;
    default:
        alert('Я Вас не понял. Попробуйте заново');
}

