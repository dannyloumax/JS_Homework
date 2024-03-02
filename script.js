// Task 1 --------------------------------

const newObject = {
    id: 1,
    name: 'Max'
}
delete newObject.id;
delete newObject.name;
console.log(newObject);

// Task 2 --------------------------------

const objectTask2 = {
    id: 2,
    name: 'Vasya'
}
let key = prompt('Введите свойство: ')
key in objectTask2 ? console.log(true) : console.log('Такого ключа нет!');

/*
console.log(key in objectTask2 ? true : 'Такого ключа нет!');
OR
let isExists = key in objectTask2 ? true : 'Такого ключа нет!';
console.log(isExists);
 */

// Task 3 --------------------------------

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (let key in student) {
    console.log(key);
}

for (let key in student) {
    console.log(student[key]);
}

// Task 4 --------------------------------

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
}
console.log(colors["ru pum pu ru rum"].red, ",", colors["ru pum pu ru rum"].blue);

// Task 5 -------------------------------

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
}

let sum = 0;
let people = 0;

for (key in salaries) {
    people += 1;
    sum += salaries[key];
}

let avg = sum / people;
console.log(avg);